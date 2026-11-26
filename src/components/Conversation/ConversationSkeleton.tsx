import type { ReactElement } from "react";
import { AvatarSkeleton } from "@/components/Avatar";
import styles from "./conversation.module.css";

export const ConversationSkeleton = (): ReactElement => {
  return (
    <div role="status" aria-label="Loading conversations">
      <ul
        className={`${styles.conversationSkeleton} ${styles.conversationList}`}
        aria-hidden="true"
      >
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
    </div>
  );
};
