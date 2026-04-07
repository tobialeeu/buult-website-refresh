import { render, screen } from "@testing-library/react";

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

import App from "@/App";

describe("Tarieven page", () => {
  it("shows the tarieven navigation and homepage CTA", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(screen.getAllByRole("link", { name: "Tarieven" }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /bekijk tarieven/i })).toHaveAttribute("href", "/tarieven");
  });

  it("renders the tarieven route with working CTA links", async () => {
    window.history.pushState({}, "", "/tarieven");

    render(<App />);

    expect(
      await screen.findByRole("heading", { name: /een oplossing voor ieder budget/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /vraag quickscan aan/i })).toHaveAttribute(
      "href",
      "/contact?pakket=website-quickscan",
    );
    expect(screen.getByRole("link", { name: /vraag een vrijblijvende offerte aan/i })).toHaveAttribute(
      "href",
      "/contact?pakket=offerte-op-maat",
    );

    const firstVersionLinks = screen.getAllByRole("link", { name: /vraag gratis eerste versie aan/i });

    expect(firstVersionLinks).toHaveLength(2);
    expect(firstVersionLinks.map((link) => link.getAttribute("href"))).toEqual([
      "/contact?pakket=complete-website",
      "/contact?pakket=complete-webshop",
    ]);
  });

  it("prefills the contact form when opened from a tarieven CTA", async () => {
    window.history.pushState({}, "", "/contact?pakket=website-quickscan");

    render(<App />);

    expect(await screen.findByText(/je aanvraag gaat over: website quickscan/i)).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(/ik wil graag een website quickscan aanvragen voor mijn huidige website\./i),
    ).toBeInTheDocument();
  });
});
