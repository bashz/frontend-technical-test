import type { User } from '../types/user'

// Gets the user's name
export const getUserName = (user: User): string => user.nickname
