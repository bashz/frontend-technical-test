import type { ReactElement } from 'react';
import { AvatarSkeleton } from '@/components/Avatar'
import styles from './message.module.css'

export const MessageSkeleton = (): ReactElement => {
  return (
    <ul className={styles.messageList}>
      <li>
        <AvatarSkeleton />
      </li>
      <li>
        <AvatarSkeleton />
      </li>
      <li>
        <AvatarSkeleton />
      </li>
      <li>
        <AvatarSkeleton />
      </li>
    </ul>
  );
};
