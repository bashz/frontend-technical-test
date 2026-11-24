import type { ReactElement } from 'react'
import { Suspense } from 'react';
import { ConversationSkeleton } from '@/components/Conversation';
import Layout, { Conversations } from '@/components/Layout';

export default function Home(): ReactElement {
  return (
    <Layout>
      <Suspense fallback={<ConversationSkeleton />}>
        <Conversations />
      </Suspense>
    </Layout>
  )
}