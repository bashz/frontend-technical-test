import { getLoggedUserId } from "../UserUtils";
import { api } from "./ApiClient";
import type { Conversation } from "@/types/conversation";

const loggedUserId = getLoggedUserId();

export async function fetchConversation(id: number): Promise<Conversation> {
  return api.get(`conversation/${id}`);
}

export async function getAllConversations(id = loggedUserId): Promise<Conversation[]> {
  return api.get(`conversations/${id}`);
}
