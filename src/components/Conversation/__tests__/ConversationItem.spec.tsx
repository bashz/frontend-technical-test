import { render, screen } from "@testing-library/react";
import { ConversationItem } from "../ConversationItem";
import type { Conversation } from "@/types/conversation";

const conversation: Conversation = {
  id: 5,
  recipientId: 2,
  recipientNickname: "Taylor",
  senderId: 1,
  senderNickname: "Me",
  lastMessageTimestamp: 1_700_000_000,
};

describe("ConversationItem", () => {
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("links to the conversation and shows the other participant", () => {
    render(<ConversationItem conversation={conversation} loggedUserId={1} />);

    expect(screen.getByRole("link", { name: /Taylor/ })).toHaveAttribute("href", "/conversation/5");
    expect(screen.getByText("Taylor")).toBeInTheDocument();
    expect(screen.getByRole("link").querySelector("img")).toHaveAttribute("alt", "");
  });
});
