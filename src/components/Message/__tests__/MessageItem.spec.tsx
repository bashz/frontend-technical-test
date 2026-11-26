import { render, screen } from "@testing-library/react";
import { MessageItem } from "../MessageItem";
import type { UserMessage } from "@/types/message";

const message: UserMessage = {
  id: 1,
  conversationId: 4,
  authorId: 1,
  timestamp: 1_700_000_000,
  body: "Hello there",
  isLast: true,
  username: "Alex",
};

describe("MessageItem", () => {
  it("renders the message, identifies its author, and hides the redundant avatar", () => {
    const { container } = render(<MessageItem message={message} />);

    expect(screen.getByText("Hello there")).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Message from Alex" })).toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
    expect(container.querySelector("time")).toHaveAttribute("datetime");
  });
});
