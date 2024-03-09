import { Card } from '@/components/Molecule/Card'

interface CardListProps {
  cards: {
    id: string
    name: string
    images: {
      url: string
    }[]
    external_urls: {
      spotify: string
    }
  }[]
  title: string
}

function CardList({ cards, title }: CardListProps) {
  if (cards.length === 0) {
    return <h2 className="text-xl font-bold text-white">No Item to display</h2>
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-white xl:text-left">
        {title}
      </h2>
      <div className="mt-[2rem] flex flex-wrap justify-center gap-[1rem] xl:justify-start">
        {cards.map(({ external_urls, id, name, images }) => {
          return (
            <Card
              key={id}
              name={name}
              imgSrc={images[0].url}
              link={external_urls.spotify}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CardList
