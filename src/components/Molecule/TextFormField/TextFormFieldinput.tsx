import { Control } from '@radix-ui/react-form'

import { useTextFormField } from './useTextFormField'

interface TextFormFieldInputProps {
  type?: 'text' | 'number'
  placeHolder?: string
}

export function TextFormFieldInput({
  placeHolder,
  type = 'text',
}: TextFormFieldInputProps) {
  const { name, handleChange, value } = useTextFormField()

  return (
    <Control asChild>
      <input
        className="w-full rounded border border-solid border-gray-100 bg-gray-400 px-[14px] py-[18.5px] text-white placeholder-gray-100 hover:border-white focus:border-green"
        name={name}
        value={value}
        type={type}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </Control>
  )
}
