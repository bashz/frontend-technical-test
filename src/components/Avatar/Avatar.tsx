import type { ReactElement } from 'react';
import { getUserName, isMe } from '../../utils/UserUtils';
import styles from './avatar.module.css';
import { User } from '@/types/user';

interface AvatarProps {
  user: User;
}

export const Avatar = ({
  user,
}: AvatarProps): ReactElement => {
  return (
    <span className={`${styles.avatar} ${isMe(user) ? styles.me : ''}`}>
      <img src={`https://ui-avatars.com/api/?name=${getUserName(user)}`} alt={getUserName(user)} />
    </span>
  );
};