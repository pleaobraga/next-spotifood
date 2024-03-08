import { Control } from '@radix-ui/react-form'

interface TextFormFieldInputProps {
  name: string
  value?: string
  type?: 'text' | 'number'
  placeHolder?: string
}

export function TextFormFieldInput({
  name,
  value,
  placeHolder,
  type = 'text',
}: TextFormFieldInputProps) {
  return (
    <Control asChild>
      <input
        className="w-full rounded border border-solid border-gray-100 bg-gray-400 px-[14px] py-[18.5px] text-white placeholder-gray-100"
        name={name}
        value={value}
        type={type}
        placeholder={placeHolder}
      />
    </Control>
  )
}
