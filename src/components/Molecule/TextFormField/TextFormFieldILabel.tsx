'use client'

import { Label } from '@radix-ui/react-form'

import { useTextFormField } from './useTextFormField'

interface TextFormFieldLabelProps {
  value?: string
}

export function TextFormFieldLabel({ value }: TextFormFieldLabelProps) {
  const { name } = useTextFormField()

  return (
    <Label className="mb-[5px] inline-block font-bold capitalize text-white">
      {value ?? name}
    </Label>
  )
}
