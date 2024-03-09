'use client'

import { CardList } from '@/components/Organism/CardList'
import { Filter } from '@/components/Organism/Filter'
import { usePlaylist } from '../hooks/usePlaylist'

export default function Home() {
  const { cards, playlistsTitle, reFetch } = usePlaylist()

  return (
    <>
      <Filter />
      <main className="flex h-full w-full justify-center">
        <div className="container mb-[2rem] mt-[3rem] flex h-full w-full justify-center p-6">
          <CardList cards={cards} title={playlistsTitle || 'Playlists'} />
        </div>
      </main>
      <button className="m-[3rem] bg-white p-6" onClick={reFetch}>
        test
      </button>
    </>
  )
}
