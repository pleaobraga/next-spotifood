'use client'

import { useEffect, useState } from 'react'

import { getToken } from '@/service/spotifyAuth'
import { getPlaylistAPI } from '@/api/playlist'

export function usePlaylist() {
  const [token, setToken] = useState<string | null>(null)
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    const getSpotifyToken = async () => {
      try {
        const token = await getToken()

        setToken(token)

        console.log('token', token)
      } catch (e) {
        console.log('error', e)
      }
    }

    getSpotifyToken()
  }, [])

  useEffect(() => {
    if (token) {
      const getSpotifyPlaylist = async () => {
        try {
          const { data } = await getPlaylistAPI({ filter: '', token })

          setPlaylists(data.playlists)
        } catch (e) {
          console.log('error', e)
        }
      }

      getSpotifyPlaylist()
    }
  }, [token])

  return {
    playlists,
    cards: playlists?.items ?? [],
  }
}
