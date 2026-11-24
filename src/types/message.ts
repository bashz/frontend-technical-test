export interface Message {
  id: number
  conversationId: number
  authorId: number
  timestamp: number
  body: string
}

export interface UserMessage extends Message {
  isLast: boolean
  username: string
}
