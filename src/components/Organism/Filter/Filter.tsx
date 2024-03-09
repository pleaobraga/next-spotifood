import { TextFormField } from '@/components/Molecule/TextFormField'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Form } from '@radix-ui/react-form'

function Filter() {
  return (
    <header className="w-full bg-gray-400 p-6">
      <div className="container mx-auto flex items-center gap-[3rem]">
        <h1 className="text-[2rem] font-bold text-green">Spotifood</h1>
        <Form className="w-4/5">
          <TextFormField.Root name="search">
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