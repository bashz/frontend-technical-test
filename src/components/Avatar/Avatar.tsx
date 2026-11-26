import type { ReactElement } from "react";
import styles from "./avatar.module.css";

interface AvatarProps {
  username: string;
  isCurrentUser: boolean;
}

export const Avatar = ({ username, isCurrentUser = false }: AvatarProps): ReactElement => {
  let avatarUrl = `https://ui-avatars.com/api/?name=${username}`;
  if (isCurrentUser) avatarUrl = `{avatarUrl}&color=ec6e24`;

  return (
    <div className={`${styles.avatar} ${isCurrentUser ? styles.currentUser : ""}`}>
      <img src={avatarUrl} alt={username} />
    </div>
  );
};
