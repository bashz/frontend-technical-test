import type { ReactElement } from "react";
import styles from "./avatar.module.css";

export const AvatarSkeleton = (): ReactElement => {
  return (
    <span className={styles.avatar}>
      <img src={`https://ui-avatars.com/api/?name=LBC`} alt="loading" />
    </span>
  );
};
