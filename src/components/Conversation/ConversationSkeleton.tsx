import type { ReactElement } from "react";
import { AvatarSkeleton } from "@/components/Avatar";
import styles from "./conversation.module.css";

export const ConversationSkeleton = (): ReactElement => {
  return (
    <ul className={`${styles.conversationSkeleton} ${styles.conversationList}`}>
      <li className={styles.skeletonItem}>
        <div className={styles.conversationDetails}>
          <div className={styles.conversationHeader}>
            <AvatarSkeleton />
            <div className={`${styles.skeletonLine} ${styles.skeletonLineMd}`}></div>
          </div>
        </div>
      </li>
      <li className={styles.skeletonItem}>
        <div className={styles.conversationDetails}>
          <div className={styles.conversationHeader}>
            <AvatarSkeleton />
            <div className={styles.skeletonLine}></div>
          </div>
        </div>
      </li>
      <li className={styles.skeletonItem}>
        <div className={styles.conversationDetails}>
          <div className={styles.conversationHeader}>
            <AvatarSkeleton />
            <div className={`${styles.skeletonLine} ${styles.skeletonLineSm}`}></div>
          </div>
        </div>
      </li>
    </ul>
  );
};
