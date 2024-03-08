import { Label } from '@radix-ui/react-form'

interface TextFormFieldLabelProps {
  name: string
}

export function TextFormFieldLabel({ name }: TextFormFieldLabelProps) {
  return (
    <Label className="mb-[5px] inline-block font-bold capitalize text-white">
      {name}
    </Label>
  )
}
