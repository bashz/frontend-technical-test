import type { ReactElement } from "react";
import { use } from "react";
import { getAllConversations } from "@/utils/Api";
import ConversationList from "@/components/Conversation";
import { sortConversationsByDate } from "@/utils/ConversationUtils";

async function getSortedConversations() {
  try {
    const conversations = await getAllConversations();

    return sortConversationsByDate(conversations);
  } catch (e) {
    console.error(e);
  }
}

const conversationsPromise = getSortedConversations();

export default function Conversations(): ReactElement {
  const conversations = use(conversationsPromise);

  return <ConversationList conversations={conversations} />;
}
