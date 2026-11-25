import type { ReactElement } from "react";
import { Suspense } from "react";
import Conversations, { ConversationSkeleton } from "@/components/Conversation";
import Layout from "@/components/Layout";

export default function Home(): ReactElement {
  return (
    <Layout>
      <Suspense fallback={<ConversationSkeleton />}>
        <Conversations />
      </Suspense>
    </Layout>
  );
}
