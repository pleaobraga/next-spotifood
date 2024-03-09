'use client'

import { useEffect, useState } from 'react'

import { getToken } from '@/service/spotifyAuth'
import { getPlaylistAPI } from '@/api/playlist'
import type { Playlist } from '@/api/playlist'
import { useAbortFetch } from './useAbortFetch'

export function usePlaylist() {
  const { getAbortController } = useAbortFetch()

  const [token, setToken] = useState<string | null>(null)
  const [playlists, setPlaylists] = useState<Playlist | null>(null)
  const [playlistsTitle, setPlaylistsTitle] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const getSpotifyToken = async () => {
      try {
        const token = await getToken()

        setToken(token)
      } catch (e) {
        setError(true)
      }
    }

    getSpotifyToken()
  }, [])

  useEffect(() => {
    if (token) {
      const ctrl = getAbortController()

      const getPlaylist = async () => {
        try {
          const { message, playlists } = await getPlaylistAPI({
            filter: '',
            token,
            signal: ctrl.signal,
          })

          setPlaylists(playlists)
          setPlaylistsTitle(message)
        } catch (e) {
          if (e.code !== 'ERR_CANCELED') {
            console.log('error', e)
            setError(true)
          }
        }
      }

      getPlaylist()
    }
  }, [token, count])

  return {
    playlists,
    cards: playlists?.items ?? [],
    error,
    playlistsTitle,
    reFetch: () => setCount((state) => state + 1),
  }
}
