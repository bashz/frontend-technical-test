import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/UserUtils'
import '../styles/tokens.css'
import '../styles/globals.css'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3005'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
