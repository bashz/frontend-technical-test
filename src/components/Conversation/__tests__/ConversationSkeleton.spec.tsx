import { render, screen } from "@testing-library/react";
import { ConversationSkeleton } from "../ConversationSkeleton";

describe("ConversationSkeleton", () => {
  it("announces loading and hides placeholder rows from assistive technology", () => {
    const { container } = render(<ConversationSkeleton />);

    expect(screen.getByRole("status", { name: "Loading conversations" })).toBeInTheDocument();
    expect(container.querySelector("ul")).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelectorAll("li")).toHaveLength(3);
  });
});
