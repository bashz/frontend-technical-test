import { Conversation } from "@/types/conversation";

export const sortConversationsByDate = (conversations: Conversation[]): Conversation[] =>
  conversations.sort((a, b) => a.lastMessageTimestamp - b.lastMessageTimestamp)
