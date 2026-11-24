import { api } from './ApiClient'
import type { Message } from '@/types/message'

export async function fetchMessage(id: number): Promise<Message> {
  return api.get(`message/${id}`)
} 

export async function getAllMessages(conversationId: number): Promise<Message[]> {
  return api.get(`messages/${conversationId}`)
}

export async function sendMessage(message: Omit<Message, id>): Promise {
  return api.post('messages', message)
}
