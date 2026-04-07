import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "@/App";
import { toast } from "sonner";

vi.mock("framer-motion", async () => {
  const React = await import("react");

  return {
    AnimatePresence: ({ children }: { children: unknown }) => <>{children}</>,
    motion: new Proxy(
      {},
      {
        get: (_target, element) =>
          React.forwardRef((props: Record<string, unknown>, ref) =>
            React.createElement(element as string, { ref, ...props }, props.children),
          ),
      },
    ),
    useReducedMotion: () => true,
  };
});

vi.mock("sonner", async () => {
  const actual = await vi.importActual<typeof import("sonner")>("sonner");

  return {
    ...actual,
    toast: {
      success: vi.fn(),
      error: vi.fn(),
    },
  };
});

const mockedToast = vi.mocked(toast);

function mockSuccessfulTurnstile() {
  window.turnstile = {
    render: vi.fn((_container, options: TurnstileRenderOptions) => {
      options.callback?.("turnstile-token");
      return "widget-id";
    }),
    reset: vi.fn(),
    remove: vi.fn(),
  };
}

describe("Contact form integrations", () => {
  const originalEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const originalTurnstileKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.clearAllMocks();
    mockSuccessfulTurnstile();
    import.meta.env.VITE_FORMSPREE_ENDPOINT = "https://formspree.io/f/test-form";
    import.meta.env.VITE_TURNSTILE_SITE_KEY = "turnstile-site-key";
  });

  afterEach(() => {
    import.meta.env.VITE_FORMSPREE_ENDPOINT = originalEndpoint;
    import.meta.env.VITE_TURNSTILE_SITE_KEY = originalTurnstileKey;
    globalThis.fetch = originalFetch;
    delete window.turnstile;
  });

  it("submits the contact form with metadata and the selected pakket", async () => {
    import.meta.env.VITE_TURNSTILE_SITE_KEY = "";

    let submittedEntries: Record<string, FormDataEntryValue> = {};
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ "content-type": "application/json" }),
      json: async () => ({ next: "/thanks" }),
    } satisfies Partial<Response>);

    fetchMock.mockImplementation(async (_url, requestInit) => {
      const formData = requestInit?.body as FormData;
      submittedEntries = Object.fromEntries(formData.entries());

      return {
        ok: true,
        status: 200,
        headers: new Headers({ "content-type": "application/json" }),
        json: async () => ({ next: "/thanks" }),
      } satisfies Partial<Response>;
    });

    globalThis.fetch = fetchMock as typeof fetch;
    window.history.pushState({}, "", "/contact?pakket=website-quickscan");

    render(<App />);

    fireEvent.change(await screen.findByLabelText(/naam \*/i), { target: { value: "Tobias" } });
    fireEvent.change(screen.getByLabelText(/e-mailadres \*/i), { target: { value: "test@buult.nl" } });
    fireEvent.change(screen.getByLabelText(/telefoonnummer/i), { target: { value: "0612345678" } });
    fireEvent.change(screen.getByLabelText(/bedrijfsnaam/i), { target: { value: "Buult" } });
    const agreementCheckbox = screen.getByRole("checkbox");
    fireEvent.click(agreementCheckbox);
    expect(agreementCheckbox).toBeChecked();
    fireEvent.submit(screen.getByRole("button", { name: /verstuur bericht/i }).closest("form")!);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const [, requestInit] = fetchMock.mock.calls[0];

    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/test-form",
      expect.objectContaining({
        method: "POST",
        headers: { Accept: "application/json" },
      }),
    );
    expect(requestInit?.body).toBeInstanceOf(FormData);
    expect(submittedEntries.message).toBe(
      "Ik wil graag een Website Quickscan aanvragen voor mijn huidige website.",
    );
    expect(submittedEntries.form_type).toBe("contact");
    expect(submittedEntries.source_path).toBe("/contact?pakket=website-quickscan");
    expect(submittedEntries.pakket).toBe("Website Quickscan");
    expect(mockedToast.success).toHaveBeenCalledWith(
      "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.",
    );
  });

  it("shows a submit error when the provider rejects the request", async () => {
    import.meta.env.VITE_TURNSTILE_SITE_KEY = "";

    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 429,
      headers: new Headers({ "content-type": "application/json" }),
      json: async () => ({ errors: [{ message: "Rate limit exceeded" }] }),
    } satisfies Partial<Response>);

    globalThis.fetch = fetchMock as typeof fetch;
    window.history.pushState({}, "", "/gratis-kennismaking");

    render(<App />);

    fireEvent.change(await screen.findByLabelText(/bedrijfsnaam \*/i), { target: { value: "Buult" } });
    fireEvent.change(screen.getByLabelText(/e-mailadres \*/i), { target: { value: "test@buult.nl" } });
    fireEvent.change(screen.getByLabelText(/telefoonnummer \*/i), { target: { value: "0612345678" } });
    fireEvent.change(screen.getByLabelText(/beste tijd om te bellen \*/i), {
      target: { value: "Morgen 10:00" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /bel mij terug/i }).closest("form")!);

    await waitFor(() =>
      expect(mockedToast.error).toHaveBeenCalledWith(
        "Er zijn net te veel aanvragen verstuurd. Probeer het over een paar minuten opnieuw.",
      ),
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("submits the kennismaking form with a normalized payload", async () => {
    import.meta.env.VITE_TURNSTILE_SITE_KEY = "";

    let submittedEntries: Record<string, FormDataEntryValue> = {};
    const fetchMock = vi.fn().mockImplementation(async (_url, requestInit) => {
      const formData = requestInit?.body as FormData;
      submittedEntries = Object.fromEntries(formData.entries());

      return {
        ok: true,
        status: 200,
        headers: new Headers({ "content-type": "application/json" }),
        json: async () => ({ next: "/thanks" }),
      } satisfies Partial<Response>;
    });

    globalThis.fetch = fetchMock as typeof fetch;
    window.history.pushState({}, "", "/gratis-kennismaking");

    render(<App />);

    fireEvent.change(await screen.findByLabelText(/bedrijfsnaam \*/i), { target: { value: "Buult" } });
    fireEvent.change(screen.getByLabelText(/e-mailadres \*/i), { target: { value: "test@buult.nl" } });
    fireEvent.change(screen.getByLabelText(/telefoonnummer \*/i), { target: { value: "0612345678" } });
    fireEvent.change(screen.getByLabelText(/beste tijd om te bellen \*/i), {
      target: { value: "Morgen 10:00" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /bel mij terug/i }).closest("form")!);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    expect(submittedEntries.form_type).toBe("kennismaking");
    expect(submittedEntries.source_path).toBe("/gratis-kennismaking");
    expect(submittedEntries.company).toBe("Buult");
    expect(submittedEntries.email).toBe("test@buult.nl");
    expect(submittedEntries.phone).toBe("0612345678");
    expect(submittedEntries.best_call_time).toBe("Morgen 10:00");
    expect(submittedEntries.message).toBe(
      "Aanvraag gratis kennismakingsgesprek.\nBedrijfsnaam: Buult\nE-mailadres: test@buult.nl\nTelefoonnummer: 0612345678\nBeste tijd om te bellen: Morgen 10:00",
    );
    expect(mockedToast.success).toHaveBeenCalledWith("Bedankt! We bellen je zo snel mogelijk terug.");
  });
});
