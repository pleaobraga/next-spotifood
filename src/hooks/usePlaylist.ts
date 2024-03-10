'use client'

import { useEffect, useMemo, useState } from 'react'

import { getToken } from '@/service/spotifyAuth'
import type { Playlist } from '@/api/playlist'
import { PlaylistItem } from '@/api/playlist/playlist.interface'
import { createFunctionGetAPI } from '@/api/playlist/playlist'

export function usePlaylist() {
  const [token, setToken] = useState<string | null>(null)
  const [playlists, setPlaylists] = useState<Playlist | null>(null)
  const [playlistsTitle, setPlaylistsTitle] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [filteredItems, setFilteredItems] = useState<PlaylistItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
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

  const getPlaylist1 = useMemo(() => createFunctionGetAPI(), [])

  useEffect(() => {
    if (token) {
      const getPlaylist = async () => {
        try {
          const a = await getPlaylist1({
            filter: '',
            token,
          })

          if (a) {
            const { message, playlists } = a
            setPlaylists(playlists)
            setFilteredItems(playlists.items)
            setPlaylistsTitle(message)
          }
        } catch (e) {
          console.log('error', e)
          setError(true)
        } finally {
          setIsLoading(false)
        }
      }

      getPlaylist()
    }
  }, [token, count, getPlaylist1])

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
    refetch: () => setCount((state) => state + 1),
  }
}
