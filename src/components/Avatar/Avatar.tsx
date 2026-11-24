import type { ReactElement } from "react";
import styles from "./avatar.module.css";
import Image from "next/image";

interface AvatarProps {
  username: string;
  isCurrentUser: boolean;
}

export const Avatar = ({ username, isCurrentUser = false }: AvatarProps): ReactElement => {
  return (
    <span className={`${styles.avatar} ${isCurrentUser ? styles.currentUser : ""}`}>
      <Image src={`https://ui-avatars.com/api/?name=${username}`} alt={username} />
    </span>
  );
};
