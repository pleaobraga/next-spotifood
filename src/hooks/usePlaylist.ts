'use client'

import { useEffect, useState } from 'react'

import { getToken } from '@/service/spotifyAuth'
import { getPlaylistAPI } from '@/api/playlist'
import type { Playlist } from '@/api/playlist'
import { useAbortFetch } from './useAbortFetch'
import { PlaylistItem } from '@/api/playlist/playlist.interface'

export function usePlaylist() {
  const { getAbortController } = useAbortFetch()

  const [token, setToken] = useState<string | null>(null)
  const [playlists, setPlaylists] = useState<Playlist | null>(null)
  const [playlistsTitle, setPlaylistsTitle] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [filteredItems, setFilteredItems] = useState<PlaylistItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

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
          setFilteredItems(playlists.items)
          setPlaylistsTitle(message)
        } catch (e) {
          if (e.code !== 'ERR_CANCELED') {
            console.log('error', e)
            setError(true)
          }
        } finally {
          setIsLoading(false)
        }
      }

      getPlaylist()
    }
  }, [token])

  function filterItems(searchTerm = '') {
    if (searchTerm === '') {
      setFilteredItems(playlists?.items as PlaylistItem[])
    }

    const filteredItems = playlists?.items.filter(({ name }) =>
      name.toUpperCase().includes(searchTerm.toUpperCase())
    )

    setFilteredItems(filteredItems as PlaylistItem[])
  }

  return {
    playlists,
    cards: filteredItems ?? [],
    error,
    playlistsTitle,
    filterItems,
    isLoading,
  }
}
