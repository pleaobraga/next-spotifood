import axios from 'axios'

const BASE_SPOTIFY_API_URL =
  'https://api.spotify.com/v1/browse/featured-playlists'

interface getPlaylistAPIProps {
  filter?: string
  token: string
}

export const getPlaylistAPI = ({ filter = '', token }: getPlaylistAPIProps) =>
  axios.get(`${BASE_SPOTIFY_API_URL}${filter}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

// --- auth ---

const SPOTIFY_TOKEN_API = 'https://accounts.spotify.com/api/token'

const auth = btoa(
  `${process.env.NEXT_PUBLIC_APP_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_APP_SPOTIFY_CLIENT_SECRET}`
)

const options = {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${auth}`,
  }),
  body: 'grant_type=client_credentials',
}

export const getTokenAPI = async () => {
  try {
    const response = await fetch(SPOTIFY_TOKEN_API, options)
    const result = await response.json()
    return result
  } catch (e) {
    return e
  }
}
