import type { ReactElement } from 'react';
import { getUserName } from '../../utils/UserUtils';
import styles from './avatar.css';
import { User } from '@/types/user';

interface AvatarProps {
  user: User;
  className?: string;
}

export const Avatar = ({
  user,
  className = styles.avatar,
}: AvatarProps): ReactElement => {
  return (
    <span className={className}>
      <img src={`https://ui-avatars.com/api/?name=${getUserName(user)}`} alt={getUserName(user)} />
    </span>
  );
};