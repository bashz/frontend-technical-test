import { render, screen } from "@testing-library/react";
import { Avatar } from "../Avatar";

describe("Avatar", () => {
  it("labels the avatar with the username by default", () => {
    render(<Avatar username="Alex" />);

    expect(screen.getByRole("img", { name: "Alex" })).toHaveAttribute(
      "src",
      "https://ui-avatars.com/api/?name=Alex",
    );
  });

  it("uses an empty alternative text when decorative", () => {
    const { container } = render(<Avatar username="Alex" decorative />);

    expect(container.querySelector("img")).toHaveAttribute("alt", "");
  });
});
