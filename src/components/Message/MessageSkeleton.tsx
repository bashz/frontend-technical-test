import type { ReactElement } from "react";
import { AvatarSkeleton } from "@/components/Avatar";
import styles from "./message.module.css";

export const MessageSkeleton = (): ReactElement => {
  return (
    <div role="status" aria-label="Loading messages">
      <ul className={styles.messageList} aria-hidden="true">
        <li
          style={{ width: "60%" }}
          className={`${styles.messageSkeleton} ${styles.messageItem} ${styles.userMessage} ${styles.userSkeleton}`}
        >
          <div className={styles.messageAvatar} />
          <div className={`${styles.messageContent} ${styles.skeletonContent}`}>
            <p className={`${styles.messageBubble} ${styles.skeletonBubble}`}>
              <span />
            </p>
            <time className={`${styles.messageTime} ${styles.skeletonTime}`}></time>
          </div>
        </li>
        <li
          style={{ width: "80%" }}
          className={`${styles.messageSkeleton} ${styles.messageItem} ${styles.contactMessage} ${styles.contactSkeleton}`}
        >
          <div className={styles.messageAvatar} />
          <div className={`${styles.messageContent} ${styles.skeletonContent}`}>
            <p className={`${styles.messageBubble} ${styles.skeletonBubble}`}>
              <span />
            </p>
            <time className={`${styles.messageTime} ${styles.skeletonTime}`}></time>
          </div>
        </li>
        <li
          style={{ width: "40%" }}
          className={`${styles.messageSkeleton} ${styles.messageItem} ${styles.contactMessage} ${styles.contactSkeleton}`}
        >
          <div className={styles.messageAvatar} />
          <div className={`${styles.messageContent} ${styles.skeletonContent}`}>
            <p className={`${styles.messageBubble} ${styles.skeletonBubble}`}>
              <span />
            </p>
            <time className={`${styles.messageTime} ${styles.skeletonTime}`}></time>
          </div>
        </li>
        <li
          style={{ width: "50%" }}
          className={`${styles.messageSkeleton} ${styles.messageItem} ${styles.userMessage} ${styles.userSkeleton}`}
        >
          <div className={styles.messageAvatar}>
            <AvatarSkeleton />
          </div>
          <div className={`${styles.messageContent} ${styles.skeletonContent}`}>
            <p className={`${styles.messageBubble} ${styles.skeletonBubble}`}>
              <span />
            </p>
            <time className={`${styles.messageTime} ${styles.skeletonTime}`}></time>
          </div>
        </li>
        <li
          style={{ width: "80%" }}
          className={`${styles.messageSkeleton} ${styles.messageItem} ${styles.contactMessage} ${styles.contactSkeleton}`}
        >
          <div className={styles.messageAvatar}>
            <AvatarSkeleton />
          </div>
          <div className={`${styles.messageContent} ${styles.skeletonContent}`}>
            <p className={`${styles.messageBubble} ${styles.skeletonBubble}`}>
              <span />
            </p>
            <time className={`${styles.messageTime} ${styles.skeletonTime}`}></time>
          </div>
        </li>
      </ul>
    </div>
  );
};
