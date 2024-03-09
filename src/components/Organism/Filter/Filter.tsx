'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Form } from '@radix-ui/react-form'

import { TextFormField } from '@/components/Molecule/TextFormField'

interface FilterProps {
  onChangeFilter: (e: string) => void
}

function Filter({ onChangeFilter }: FilterProps) {
  return (
    <header className="sticky top-0 z-10 w-full  bg-gray-800 shadow-[0_4px_3px_-0px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto flex items-center p-6 sm:gap-[3rem]">
        <h1 className="hidden text-[1.5rem] font-bold text-green sm:block sm:text-[2rem]">
          Nextfy
        </h1>
        <Form className="w-full sm:w-4/5">
          <TextFormField.Root name="search" onChange={onChangeFilter}>
            <TextFormField.InputIcon
              placeHolder="type your search"
              Icon={({ className }: { className?: string }) => (
                <MagnifyingGlassIcon color="white" className={className} />
              )}
            />
          </TextFormField.Root>
        </Form>
      </div>
    </header>
  )
}

export default Filter
