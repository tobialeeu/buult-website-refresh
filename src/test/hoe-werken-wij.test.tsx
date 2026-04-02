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

    const { container } = render(<App />);

    expect(
      await screen.findByRole("heading", { name: /een helder traject van eerste gesprek tot eindproduct/i }),
    ).toBeInTheDocument();

    expect(screen.queryByText(/trajectoverzicht/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /bekijk het stappenplan/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/^Optioneel$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Focus$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/eerst afstemmen/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/we beginnen met de juiste input verzamelen en snel een eerste richting neerzetten\./i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/daarna verdiepen/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/in een uitgebreide sessie scherpen we structuur, uitstraling en inhoud samen aan\./i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/dan afronden/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/na de feedbacksessie leveren we de website op met de laatste punten verwerkt\./i),
    ).not.toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /fotoshoot/i })).toBeInTheDocument();
    expect(screen.getByText(/optioneel: fotoshoot\./i)).toBeInTheDocument();
    expect(screen.getByText(/eindproduct met verwerkte feedback/i)).toBeInTheDocument();

    expect(container.querySelectorAll('main a[href="/gratis-kennismaking"]')).toHaveLength(1);
  });
});
