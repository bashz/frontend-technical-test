import type { ReactElement } from "react";
import { useCallback, useState, useEffect } from "react";
import { getAllMessages, fetchConversation } from "@/utils/Api";
import MessageList from "@/components/Message";
import { toUserMessage } from "@/utils/MessageUtils";

interface MessagesProps {
  conversationId: number;
  lastMessageId: number;
}

export default function Messages({ conversationId, lastMessageId }: MessagesProps): ReactElement {
  const [messages, setMessages] = useState<LoadState>([]);

  const getConversation = useCallback(async () => {
    if (conversationId) {
      try {
        const [conversations, messages] = await Promise.all([
          fetchConversation(conversationId),
          getAllMessages(conversationId),
        ]);
        const conversation = conversations[0];

        const userMessages = toUserMessage(messages, conversation);

        setMessages(userMessages);
      } catch (e) {
        console.error(e);
      }
    }
  }, [conversationId, lastMessageId]);

  useEffect(() => {
    void getConversation();
  }, [getConversation]);

  return <MessageList messages={messages} />;
}
