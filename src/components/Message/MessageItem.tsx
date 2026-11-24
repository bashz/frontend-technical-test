import type { ReactElement } from 'react';
import Avatar from '@/components/Avatar'
import type { UserMessage } from '@/types/message'
import styles from './message.module.css'
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

interface MessageItemProps {
  message: UserMessage
}

export function MessageItem({ message }: MessageItemProps): ReactElement {

  const timestamp = message.timestamp * 1000
  console.log(message)

  return (
    <li>
      { message.isLast ? <Avatar username={message.username} /> : '' }
      <span >{message.body}</span>
      <p>{message.isLast}</p>
      <time dateTime={dayjs(timestamp)}>
        { dayjs().to(dayjs(timestamp)) }
      </time>
    </li>
  )
}