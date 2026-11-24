import type { ReactElement } from "react";
import type { Conversation } from "@/types/conversation";
import { ConversationItem } from "./ConversationItem";
import styles from "./conversation.module.css";

interface ConversationListProps {
  conversations: Conversation[];
}

export const ConversationList = ({ conversations }: ConversationListProps): ReactElement => {
  return (
    <ul className={styles.conversationList}>
      {conversations.map((conversation) => {
        return <ConversationItem key={conversation.id} conversation={conversation} />;
      })}
    </ul>
  );
};
