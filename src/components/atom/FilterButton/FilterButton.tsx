import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'

interface FilterButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

const FilterButton = ({ handleClick }: FilterButtonProps) => {
  return (
    <IconButton
      className="rounded-full p-3 hover:bg-gray"
      onClick={handleClick}
      aria-label="filter"
    >
      <MixerHorizontalIcon height={35} width={35} color="white" />
    </IconButton>
  )
}

export default FilterButton
