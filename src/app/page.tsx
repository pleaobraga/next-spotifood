'use client'

import { CardList } from '@/components/Organism/CardList'
import { Filter } from '@/components/Organism/Filter'
import { usePlaylist } from '../hooks/usePlaylist'

export default function Home() {
  const { cards, playlistsTitle } = usePlaylist()

  return (
    <>
      <Filter />
      <main className="flex h-full w-full justify-center">
        <div className="container mt-[3rem] flex h-full w-full justify-center p-6">
          <CardList cards={cards} title={playlistsTitle || 'Playlists'} />
        </div>
      </main>
    </>
  )
}
