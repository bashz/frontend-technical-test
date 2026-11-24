import { getLoggedUserId } from '../UserUtils'
import { api } from './ApiClient'
import type { User } from '@/types/user'

const loggedUserId = getLoggedUserId()

export async function fetchUser(id = loggedUserId): Promise<User> {
  return api.get(`users/${id}`)
} 
