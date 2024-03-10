import { type FetchProps, httpRequest } from '../HTTPRequest/HTTPRequest'
import { type APIToken, type PlaylistResponse } from './playlist.interface'

const BASE_SPOTIFY_API_URL =
  'https://api.spotify.com/v1/browse/featured-playlists'

interface getPlaylistAPIProps {
  filter?: string
  token: string
}

type CreateFunctionGetAPI = () => (
  props: getPlaylistAPIProps
) => Promise<PlaylistResponse | undefined>

export const createFunctionGetAPI: CreateFunctionGetAPI = () => {
  let ctrl = new AbortController()
  let isAPIFetched = false

  return async ({ filter = '', token }: getPlaylistAPIProps) => {
    if (isAPIFetched) {
      ctrl.abort()
      ctrl = new AbortController()
    }

    const configuration: FetchProps = {
      method: 'get',
      url: `${BASE_SPOTIFY_API_URL}${filter}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      signal: ctrl.signal,
    }

    try {
      const response = await httpRequest.fetch<PlaylistResponse>(configuration)
      isAPIFetched = true
      return response
    } catch (e) {
      if (e.code !== 'ERR_CANCELED') {
        throw e
      }
    }
  }
}

// --- auth ---

const SPOTIFY_TOKEN_API = 'https://accounts.spotify.com/api/token'

const auth = btoa(
  `${process.env.NEXT_PUBLIC_APP_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_APP_SPOTIFY_CLIENT_SECRET}`
)

export const getTokenAPI = async (): Promise<APIToken> => {
  const configuration: FetchProps = {
    method: 'post',
    url: SPOTIFY_TOKEN_API,
    data: { grant_type: 'client_credentials' },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${auth}`,
    },
  }

  return httpRequest.fetch<APIToken>(configuration)
}
