import type { User } from '../types/user'

// Default way to use a logged user
// Feel free to update the user ID for your tests
// or enhance it with better data source, or better user management
export const getLoggedUserId = ():User['id'] => 1

// Gets the user's name
export const getUserName = (user: User): string => user.nickname

export const isMe = (user: User): boolean => user.id === getLoggedUserId()
