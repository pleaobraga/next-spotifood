import { createContext, useContext } from 'react'

interface TextFormFieldContextValues {
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextFormFieldContext =
  createContext<TextFormFieldContextValues | null>(null)

// Create a custom hook to access the context
export function useTextFormField() {
  const context = useContext(TextFormFieldContext)
  if (!context) {
    throw new Error(
      'TextFormField compound components must be rendered within the TextFormField.Root component'
    )
  }
  return context
}
