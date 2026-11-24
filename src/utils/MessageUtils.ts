import { Conversation } from "@/types/conversation";
import { Message, UserMessage } from "@/types/message";

export const sortMessagesByDate = (messages: Message[]): Messages[] =>
  messages.sort((a, b) => a.timestamp - b.timestamp)

export const toUserMessage = (messages: Message[], conversation: Conversation): UserMessage[] => {
  const sortedMessages = sortMessagesByDate(messages);
  const userMessages = sortedMessages
    .map((message) => ({
      ...message,
      username: message.authorId === conversation.senderId ? conversation.senderNickname : conversation.recipientNickname,
      isLast: false
    }))

  if (userMessages.length > 0) {
    userMessages[userMessages.length -1].isLast = true
    const lastAuthorId = userMessages[userMessages.length - 1].authorId

    if (userMessages.length > 1) {
      for (let i = userMessages.length - 2; i >= 0; i--) {
        const userMessage = userMessages[i];
        if (userMessage.authorId !== lastAuthorId) {
          userMessage.isLast = true
          break
        }
      }
    }
  }

  return userMessages
}