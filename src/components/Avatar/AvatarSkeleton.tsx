import type { ReactElement } from "react";
import styles from "./avatar.module.css";

export const AvatarSkeleton = (): ReactElement => {
  return (
    <span className={styles.avatar}>
      <div className={styles.placeholder} />
    </span>
  );
};
