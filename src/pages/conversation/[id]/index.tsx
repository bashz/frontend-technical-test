import type { ReactElement } from "react";
import { useState, Suspense } from "react";
import { useRouter } from "next/router";
import Messages, { MessageForm, MessageSkeleton } from "@/components/Message";
import { Message } from "@/types/message";
import { getAllMessages } from "@/utils/Api/Message";
import Layout from "@/components/Layout";
import { getLoggedUserId } from "@/utils/UserUtils";
import { fetchConversation } from "@/utils/Api";
import { toUserMessage } from "@/utils/MessageUtils";

const authorId = getLoggedUserId();

const getUserMessages = async (conversationId: number) => {
  try {
    const [conversations, messages] = await Promise.all([
      fetchConversation(conversationId),
      getAllMessages(conversationId),
    ]);
    const conversation = conversations[0];

    return toUserMessage(messages, conversation);
  } catch (e) {
    console.error(e);
  }
};

export default function Home(): ReactElement {
  const [lastMessageId, setLastMessageId] = useState(0);
  const router = useRouter();
  const conversationId = router.query.id;
  console.log(conversationId);

  let userMessagesPromise = getUserMessages(conversationId);

  const onSend = (message: Message) => {
    setLastMessageId(message.id);
  };

  return (
    <Layout>
      {router.isReady && (
        <>
          <Suspense fallback={<MessageSkeleton />}>
            <Messages userMessagesPromise={userMessagesPromise} lastMessageId={lastMessageId} />
          </Suspense>

          <MessageForm authorId={authorId} conversationId={conversationId} onSend={onSend} />
        </>
      )}
    </Layout>
  );
}
