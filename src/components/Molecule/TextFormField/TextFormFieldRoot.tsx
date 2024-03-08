import { Field } from '@radix-ui/react-form'
import React from 'react'

interface TextFormFieldRootProps {
  name: string
  children: React.ReactNode
}

export function TextFormFieldRoot({ name, children }: TextFormFieldRootProps) {
  return (
    <Field className="w-full" name={name}>
      <div className="flex flex-col ">{children}</div>
    </Field>
  )
}
