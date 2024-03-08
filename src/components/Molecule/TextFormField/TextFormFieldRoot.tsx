import { Field } from '@radix-ui/react-form'
import React, { useState } from 'react'
import { TextFormFieldContext } from './useTextFormField'

interface TextFormFieldRootProps {
  name: string
  children: React.ReactNode
  defaultValue?: string
  onChange?: (e: string) => void
}

export function TextFormFieldRoot({
  name,
  defaultValue = '',
  children,
  onChange,
}: TextFormFieldRootProps) {
  const [value, setValue] = useState(defaultValue)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e.target.value)
    }

    setValue(e.target.value)
  }

  return (
    <TextFormFieldContext.Provider value={{ name, handleChange, value }}>
      <Field className="w-full" name={name}>
        <div className="flex flex-col ">{children}</div>
      </Field>
    </TextFormFieldContext.Provider>
  )
}
