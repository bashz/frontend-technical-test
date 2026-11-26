import type { ReactElement } from "react";
import { use } from "react";
import { MessageList } from "./MessageList";
import { UserMessage } from "@/types/message";

interface MessagesProps {
  userMessagesPromise: Promise<UserMessage[]>;
  lastMessageId: number;
}

export function Messages({ userMessagesPromise, lastMessageId }: MessagesProps): ReactElement {
  const messages = use(userMessagesPromise);

  return <MessageList messages={messages} />;
}
