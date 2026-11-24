import type { ReactElement } from "react";
import { AvatarSkeleton } from "@/components/Avatar";
import styles from "./conversation.module.css";

export const ConversationSkeleton = (): ReactElement => {
  return (
    <ul className={styles.conversationList}>
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
