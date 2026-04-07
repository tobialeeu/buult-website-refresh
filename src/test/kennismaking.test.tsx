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

describe("Kennismaking page", () => {
  it("renders the required fields for the gratis kennismaking route", async () => {
    window.history.pushState({}, "", "/gratis-kennismaking");

    render(<App />);

    expect(await screen.findByRole("heading", { name: /plan een gratis kennismakingsgesprek/i })).toBeInTheDocument();

    const companyNameInput = screen.getByLabelText(/bedrijfsnaam \*/i);
    const emailInput = screen.getByLabelText(/e-mailadres \*/i);
    const phoneInput = screen.getByLabelText(/telefoonnummer \*/i);
    const bestCallTimeInput = screen.getByLabelText(/beste tijd om te bellen \*/i);

    expect(companyNameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(phoneInput).toBeRequired();
    expect(bestCallTimeInput).toBeRequired();

    expect(companyNameInput).toHaveAttribute("type", "text");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(phoneInput).toHaveAttribute("type", "tel");
    expect(bestCallTimeInput).toHaveAttribute("type", "text");
  });
});
