import type { ReactElement } from "react";
import { useCallback, useState, useEffect } from "react";
import { getAllConversations } from "@/utils/Api";
import ConversationList from "@/components/Conversation";
import { sortConversationsByDate } from "@/utils/ConversationUtils";

export default function Conversations(): ReactElement {
  const [conversations, setConversations] = useState<LoadState>([]);

  const getConversations = useCallback(async () => {
    try {
      const conversations = await getAllConversations();
      const sortedConversations = sortConversationsByDate(conversations);

      setConversations(sortedConversations);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void getConversations();
  }, [getConversations]);

  return <ConversationList conversations={conversations} />;
}
