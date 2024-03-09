import { CardList } from '@/components/Organism/CardList'
import { Filter } from '@/components/Organism/Filter'

export default function Home() {
  return (
    <>
      <Filter />
      <main>
        <div className="mt-[3rem] h-full w-full">
          <CardList cards={[]} />
        </div>
      </main>
    </>
  )
}
