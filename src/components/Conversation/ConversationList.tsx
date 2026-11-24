import type { ReactElement } from 'react';
import type { Conversation } from '@/types/conversation';
import { ConversationItem } from './ConversationItem'
import styles from './conversation.module.css'
import { loggedUserId } from '@/pages/_app';

interface ConversationListProps {
  conversations: Conversation[],
  loggedUserId: number,
}

export const ConversationList = ({
  conversations,
}: ConversationListProps): ReactElement => {
  return (
    <ul className={styles.conversationList}>
      {conversations.map((conversation) => {
        return (
          <ConversationItem key={conversation.id} conversation={conversation} loggedUserId={loggedUserId}/>
        );
      })}
    </ul>
  );
};
