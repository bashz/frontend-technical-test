import { render } from "@testing-library/react";
import { AvatarSkeleton } from "../AvatarSkeleton";

describe("AvatarSkeleton", () => {
  it("hides the placeholder from assistive technology", () => {
    const { container } = render(<AvatarSkeleton />);

    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });
});
