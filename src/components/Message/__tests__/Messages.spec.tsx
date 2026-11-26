import { Suspense } from "react";
import { act, render, screen } from "@testing-library/react";
import { Messages } from "../Messages";
import type { UserMessage } from "@/types/message";

describe("Messages", () => {
  it("renders the messages after its promise resolves", async () => {
    const messages: UserMessage[] = [
      {
        id: 1,
        conversationId: 4,
        authorId: 1,
        timestamp: 1_700_000_000,
        body: "Loaded message",
        isLast: true,
        username: "Alex",
      },
    ];

    await act(async () => {
      render(
        <Suspense fallback={<div role="status">Loading</div>}>
          <Messages userMessagesPromise={Promise.resolve(messages)} lastMessageId={0} />
        </Suspense>,
      );
      await Promise.resolve();
    });

    expect(await screen.findByText("Loaded message")).toBeInTheDocument();
  });
});
