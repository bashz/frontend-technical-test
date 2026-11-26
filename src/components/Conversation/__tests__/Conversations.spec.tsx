import { Suspense } from "react";
import { act, render, screen } from "@testing-library/react";
import { Conversations } from "../Conversations";

jest.mock("../../../utils/Api", () => ({
  getAllConversations: jest.fn().mockResolvedValue([
    {
      id: 5,
      recipientId: 2,
      recipientNickname: "Taylor",
      senderId: 1,
      senderNickname: "Me",
      lastMessageTimestamp: 1_700_000_000,
    },
  ]),
}));

describe("Conversations", () => {
  it("renders the fetched conversations after loading", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    try {
      await act(async () => {
        render(
          <Suspense fallback={<div role="status">Loading</div>}>
            <Conversations />
          </Suspense>,
        );
        await Promise.resolve();
      });

      expect(await screen.findByRole("link", { name: /Taylor/ })).toHaveAttribute(
        "href",
        "/conversation/5",
      );
    } finally {
      logSpy.mockRestore();
    }
  });
});
