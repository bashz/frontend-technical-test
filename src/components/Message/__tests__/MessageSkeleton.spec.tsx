import { render, screen } from "@testing-library/react";
import { MessageSkeleton } from "../MessageSkeleton";

describe("MessageSkeleton", () => {
  it("announces loading and hides placeholder rows from assistive technology", () => {
    const { container } = render(<MessageSkeleton />);

    expect(screen.getByRole("status", { name: "Loading messages" })).toBeInTheDocument();
    expect(container.querySelector("ul")).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelectorAll("li")).toHaveLength(5);
  });
});
