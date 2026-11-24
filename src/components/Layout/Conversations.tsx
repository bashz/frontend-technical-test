import type { ReactElement } from 'react'
import { useCallback, useState, useEffect } from 'react';
import { getAllConversations, fetchUser } from '@/utils/Api';
import ConversationList from '@/components/Conversation';
import { sortConversationsByDate } from '@/utils/ConversationUtils';

export default async function Conversations(): ReactElement {
  const [loggedUser, setLoggedUser] = useState<LoadState>({});
  const [conversations, setConversations] = useState<LoadState>([]);

  const getLoggedUser = useCallback(async () => {
    try {
      const user = await fetchUser()

      setLoggedUser(user)
    } catch(e) {
      console.error(e)
    }
  }, []);

  const getConversations = useCallback(async () => {
    try {
      const conversations = await getAllConversations()
      const sortedConversations = sortConversationsByDate(conversations)

      setConversations(sortedConversations)
    } catch(e) {
      console.error(e)
    }
  }, []);

  useEffect(() => {
    void getLoggedUser();
  }, [getLoggedUser]);

  useEffect(() => {
    void getConversations();
  }, [getConversations]);

  return (
    <ConversationList conversations={conversations} loggedUserId={loggedUser} />
  )
}
