import type { ReactElement } from "react";
import { useState, Suspense } from "react";
import { useRouter } from "next/router";
import { MessageSkeleton } from "@/components/Message";
import { Message } from "@/types/message";
import { sendMessage } from "@/utils/Api/Message";
import dayjs from "dayjs";
import Layout, { Messages } from "@/components/Layout";
import { getLoggedUserId } from "@/utils/UserUtils";

const authorId = getLoggedUserId();

export default function Home(): ReactElement {
  const router = useRouter();
  const conversationId = router.query.id;

  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastMessageId, setLastMessageId] = useState(0);

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
      setLastMessageId(sentMessage.id);
      setNewMessage("");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <Suspense fallback={<MessageSkeleton />}>
        <Messages conversationId={conversationId} lastMessageId={lastMessageId} />
      </Suspense>
      <form onSubmit={handleSend}>
        <textarea type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </Layout>
  );
}
