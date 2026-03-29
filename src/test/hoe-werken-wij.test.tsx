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

describe("Hoe werken wij page", () => {
  it("shows the new home CTA and navigation entry on the homepage", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(screen.getAllByRole("link", { name: "Hoe werken wij?" }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /kijk hoe wij te werk gaan/i })).toHaveAttribute(
      "href",
      "/hoe-werken-wij",
    );
  });

  it("renders the new route with the process steps", async () => {
    window.history.pushState({}, "", "/hoe-werken-wij");

    render(<App />);

    expect(
      await screen.findByRole("heading", { name: /een helder traject van eerste gesprek tot eindproduct/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/^Optioneel$/i)).toBeInTheDocument();
    expect(screen.getByText(/eindproduct met verwerkte feedback/i)).toBeInTheDocument();
  });
});
