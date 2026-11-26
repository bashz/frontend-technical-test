import type { ReactElement } from "react";
import styles from "./avatar.module.css";

export const AvatarSkeleton = (): ReactElement => {
  return (
    <span className={styles.avatar} aria-hidden="true">
      <div className={styles.placeholder} />
    </span>
  );
};
