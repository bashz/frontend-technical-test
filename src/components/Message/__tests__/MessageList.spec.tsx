import { render, screen } from "@testing-library/react";
import { MessageList } from "../MessageList";
import type { UserMessage } from "@/types/message";

const messages: UserMessage[] = [
  {
    id: 1,
    conversationId: 4,
    authorId: 1,
    timestamp: 1_700_000_000,
    body: "First message",
    isLast: false,
    username: "Alex",
  },
  {
    id: 2,
    conversationId: 4,
    authorId: 2,
    timestamp: 1_700_000_060,
    body: "Second message",
    isLast: true,
    username: "Sam",
  },
];

describe("MessageList", () => {
  it("renders each message in the labeled conversation log", () => {
    render(<MessageList messages={messages} />);

    expect(screen.getByRole("log", { name: "Conversation messages" })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("First message")).toBeInTheDocument();
    expect(screen.getByText("Second message")).toBeInTheDocument();
  });
});
