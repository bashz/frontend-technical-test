import type { ReactElement } from "react";
import styles from "./avatar.module.css";
import Image from "next/image";

export const AvatarSkeleton = (): ReactElement => {
  return (
    <span className={styles.avatar}>
      <Image src={`https://ui-avatars.com/api/?name=LBC`} alt="loading" />
    </span>
  );
};
