import { Image } from '@/components/Atom/Image'

interface CardProps {
  link: string
  imgSrc?: string
  name: string
}

function Card({ imgSrc, link, name }: CardProps) {
  return (
    <div className="mx-[0.5rem] mt-[1rem] flex w-[230px] justify-center rounded bg-gray-800 p-[16px] shadow hover:bg-gray-200">
      <a
        className="flex w-full flex-col no-underline"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="h-[200px] w-[200px]">
          <Image alt="albun image" imgSrc={imgSrc} />
        </div>
        <h3 className="mt-[20px] w-full truncate whitespace-nowrap text-nowrap font-bold text-white">
          {name}
        </h3>
      </a>
    </div>
  )
}

export default Card
