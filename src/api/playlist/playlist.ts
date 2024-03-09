import {
  type FetchProps,
  type CancelableAPIProps,
  httpRequest,
} from '../HTTPRequest/HTTPRequest'
import { type APIToken, type PlaylistResponse } from './playlist.interface'

const BASE_SPOTIFY_API_URL =
  'https://api.spotify.com/v1/browse/featured-playlists'

interface getPlaylistAPIProps extends CancelableAPIProps {
  filter?: string
  token: string
}

export const getPlaylistAPI = async ({
  filter = '',
  token,
  signal,
}: getPlaylistAPIProps) => {
  const configuration: FetchProps = {
    method: 'get',
    url: `${BASE_SPOTIFY_API_URL}${filter}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  }

  const response = await httpRequest.fetch<PlaylistResponse>(configuration)

  return response
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

  const response = await httpRequest.fetch<APIToken>(configuration)

  return response
}
