import { render, screen } from "@testing-library/react";
import { ConversationList } from "../ConversationList";
import type { Conversation } from "@/types/conversation";

const conversations: Conversation[] = [
  {
    id: 5,
    recipientId: 2,
    recipientNickname: "Taylor",
    senderId: 1,
    senderNickname: "Me",
    lastMessageTimestamp: 1_700_000_000,
  },
  {
    id: 6,
    recipientId: 3,
    recipientNickname: "Jordan",
    senderId: 1,
    senderNickname: "Me",
    lastMessageTimestamp: 1_700_000_060,
  },
];

describe("ConversationList", () => {
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("renders a named list with a link for each conversation", () => {
    render(<ConversationList conversations={conversations} />);

    expect(screen.getByRole("list", { name: "Conversations" })).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getByRole("link", { name: /Taylor/ })).toHaveAttribute("href", "/conversation/5");
    expect(screen.getByRole("link", { name: /Jordan/ })).toHaveAttribute("href", "/conversation/6");
  });
});
