import type { ReactElement } from "react";
import Avatar from "@/components/Avatar";
import type { UserMessage } from "@/types/message";
import styles from "./message.module.css";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import { getLoggedUserId } from "@/utils/UserUtils";

dayjs.extend(relativeTime);

const loggedUserId = getLoggedUserId();

interface MessageItemProps {
  message: UserMessage;
}

export function MessageItem({ message }: MessageItemProps): ReactElement {
  const timestamp = message.timestamp * 1000;

  return (
    <li
      className={`${styles.messageItem} ${message.authorId === loggedUserId ? styles.userMessage : styles.contactMessage}`}
    >
      <div className={styles.messageAvatar}>
        {message.isLast ? <Avatar username={message.username} decorative /> : ""}
      </div>
      <div
        className={styles.messageContent}
        role="group"
        aria-label={`Message from ${message.username}`}
      >
        <p className={styles.messageBubble}>{message.body}</p>
        <time className={styles.messageTime} dateTime={dayjs(timestamp)}>
          {dayjs().to(dayjs(timestamp))}
        </time>
      </div>
    </li>
  );
}
