import type { ReactElement } from "react";
import { use } from "react";
import MessageList from "@/components/Message";
import { UserMessage } from "@/types/message";

interface MessagesProps {
  userMessagesPromise: Promise<UserMessage[]>;
  lastMessageId: number;
}

export default function Messages({
  userMessagesPromise,
  lastMessageId,
}: MessagesProps): ReactElement {
  const messages = use(userMessagesPromise);

  return <MessageList messages={messages} />;
}
