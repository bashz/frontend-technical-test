import type { ReactElement } from "react";
import type { UserMessage } from "@/types/message";
import { MessageItem } from "./MessageItem";
import styles from "./message.module.css";

interface MessageListProps {
  messages: UserMessage[];
}

export const MessageList = ({ messages }: MessageListProps): ReactElement => {
  return (
    <ul
      className={styles.messageList}
      role="log"
      aria-label="Conversation messages"
      aria-relevant="additions"
    >
      {messages.map((message) => {
        return <MessageItem key={message.id} message={message} />;
      })}
    </ul>
  );
};
