import type { ReactElement } from "react";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import type { Conversation } from "@/types/conversation";
import styles from "./conversation.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { isCurrentUser } from "@/utils/UserUtils";

dayjs.extend(relativeTime);

interface ConversationItemProps {
  conversation: Conversation;
  loggedUserId: number;
}

export function ConversationItem({ conversation }: ConversationItemProps): ReactElement {
  const timestamp = conversation.lastMessageTimestamp * 1000;
  const participant = isCurrentUser(conversation.senderId)
    ? conversation.recipientNickname
    : conversation.senderNickname;
  console.log(conversation, participant, timestamp, 1795443315897);

  return (
    <li className={styles.conversationItem}>
      <Link href={`/conversation/${conversation.id}`} className={styles.conversationDetails}>
        <div className={styles.conversationHeader}>
          <Avatar username={participant} decorative />
          <span className={styles.conversationName}>{participant}</span>
        </div>
        <time className={styles.conversationTime} dateTime={dayjs(timestamp)}>
          {dayjs().to(dayjs(timestamp))}
        </time>
      </Link>
    </li>
  );
}
