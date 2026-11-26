import type { ReactElement } from "react";
import { useState } from "react";
import { Message } from "@/types/message";
import styles from "./message.module.css";
import dayjs from "dayjs";
import { sendMessage } from "@/utils/Api/Message";

interface MessagesFormProps {
  authorId: number;
  conversationId: number;
  onSend: () => void;
}

export function MessageForm({ authorId, conversationId, onSend }: MessagesFormProps): ReactElement {
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const message: Message = {
      authorId,
      body: newMessage.trim(),
      conversationId,
      timestamp: dayjs().unix(),
    };

    try {
      const sentMessage = await sendMessage(message);
      setNewMessage("");
      onSend(sentMessage);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.messageForm} onSubmit={handleSend}>
      <textarea
        className={styles.messageInput}
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className={styles.sendButton} type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
