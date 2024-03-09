'use client'

import { useEffect, useState } from 'react'

import { getToken } from '@/service/spotifyAuth'
import { getPlaylistAPI } from '@/api/playlist'
import type { Playlist } from '@/api/playlist'

export function usePlaylist() {
  const [token, setToken] = useState<string | null>(null)
  const [playlists, setPlaylists] = useState<Playlist | null>(null)
  const [playlistsTitle, setPlaylistsTitle] = useState<string | null>(null)
  const [error, setError] = useState(false)

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
      const getPlaylist = async () => {
        try {
          const { message, playlists } = await getPlaylistAPI({
            filter: '',
            token,
          })

          setPlaylists(playlists)
          setPlaylistsTitle(message)
        } catch (e) {
          console.log('error', e)
          setError(true)
        }
      }

      getPlaylist()
    }
  }, [token])

  console.log()

  return {
    playlists,
    cards: playlists?.items ?? [],
    error,
    playlistsTitle,
  }
}
