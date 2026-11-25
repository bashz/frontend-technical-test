import type { ReactElement } from "react";
import styles from "./avatar.module.css";

interface AvatarProps {
  username: string;
  isCurrentUser: boolean;
}

export const Avatar = ({ username, isCurrentUser = false }: AvatarProps): ReactElement => {
  return (
    <span className={`${styles.avatar} ${isCurrentUser ? styles.currentUser : ""}`}>
      <img src={`https://ui-avatars.com/api/?name=${username}`} alt={username} />
    </span>
  );
};
