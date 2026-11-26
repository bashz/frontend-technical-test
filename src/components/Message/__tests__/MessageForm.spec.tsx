import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { sendMessage } from "@/utils/Api/Message";
import { MessageForm } from "../MessageForm";

jest.mock("../../../utils/Api/Message", () => ({
  sendMessage: jest.fn(),
}));

const mockSendMessage = sendMessage as jest.Mock;

describe("MessageForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sends a trimmed message and clears the input after success", async () => {
    const sentMessage = {
      id: 8,
      authorId: 2,
      body: "Hello",
      conversationId: 3,
      timestamp: 1_700_000_000,
    };
    const onSend = jest.fn();
    mockSendMessage.mockResolvedValue(sentMessage);

    render(<MessageForm authorId={2} conversationId={3} onSend={onSend} />);

    const input = screen.getByRole("textbox", { name: "Message" });
    fireEvent.change(input, { target: { value: "  Hello  " } });
    fireEvent.click(screen.getByRole("button", { name: "Send" }));

    await waitFor(() => {
      expect(mockSendMessage).toHaveBeenCalledWith(
        expect.objectContaining({
          authorId: 2,
          body: "Hello",
          conversationId: 3,
        }),
      );
    });
    expect(onSend).toHaveBeenCalledWith(sentMessage);
    expect(input).toHaveValue("");
    expect(screen.getByRole("form", { name: "Send a message" })).toHaveAttribute(
      "aria-busy",
      "false",
    );
  });

  it("disables sending while the request is pending", async () => {
    let finishSending!: (message: object) => void;
    mockSendMessage.mockReturnValue(
      new Promise((resolve) => {
        finishSending = resolve;
      }),
    );

    render(<MessageForm authorId={2} conversationId={3} onSend={jest.fn()} />);
    fireEvent.change(screen.getByRole("textbox", { name: "Message" }), {
      target: { value: "Hello" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send" }));

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();
    expect(screen.getByRole("form", { name: "Send a message" })).toHaveAttribute(
      "aria-busy",
      "true",
    );

    await act(async () => {
      finishSending({ id: 8 });
    });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Send" })).toBeEnabled();
    });
  });
});
