'use client'

import { CircularLoader } from '@/components/Atom/CircularLoader'
import { CardList } from '@/components/Organism/CardList'
import { Filter } from '@/components/Organism/Filter'
import { usePlaylist } from '@/hooks/usePlaylist'

export default function Home() {
  const { cards, playlistsTitle, filterItems, isLoading, refetch } =
    usePlaylist()

  return (
    <>
      <Filter
        onChangeFilter={(searchTerm: string) => filterItems(searchTerm)}
      />
      <main className="flex h-full w-full justify-center">
        <div className="mx-auto mb-[2rem] mt-[3rem] flex h-full w-full p-6 xl:container">
          {isLoading ? (
            <CircularLoader size={50} />
          ) : (
            <CardList cards={cards} title={playlistsTitle || 'Playlists'} />
          )}
        </div>
      </main>
      <button onClick={refetch}>refetch</button>
    </>
  )
}
