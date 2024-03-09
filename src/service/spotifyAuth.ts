import { addSeconds, formatISO, compareAsc } from 'date-fns'

import { getTokenAPI } from '@/api/playlist'

export const isTokenValid = () => {
  const tokenExpiration = localStorage.getItem('spotify_token_expiration')
  const token = localStorage.getItem('spotify_token')

  if (!tokenExpiration || !token) {
    return false
  }

  return compareAsc(new Date(tokenExpiration), new Date()) === 1
}

export const getNewToken = async (): Promise<string> => {
  try {
    const { expires_in, access_token } = await getTokenAPI()

    const expireDate = addSeconds(new Date(), expires_in)

    localStorage.setItem('spotify_token_expiration', formatISO(expireDate))
    localStorage.setItem('spotify_token', access_token)

    return access_token
  } catch (e) {
    throw Error()
  }
}

export const getToken = async (): Promise<string | null> => {
  if (isTokenValid()) {
    return localStorage.getItem('spotify_token')
  }

  return getNewToken()
}
