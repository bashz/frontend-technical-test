import type { ReactElement } from "react";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import type { Conversation } from "@/types/conversation";
import styles from "./conversation.module.css";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
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
    <li>
      <Link href={`/conversation/${conversation.id}`}>
        <Avatar username={participant} />
        <span>{participant}</span>
        <time dateTime={dayjs(timestamp)}>{dayjs().to(dayjs(timestamp))}</time>
      </Link>
    </li>
  );
}
