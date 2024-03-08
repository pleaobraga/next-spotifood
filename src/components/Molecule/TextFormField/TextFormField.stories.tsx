import type { Meta, StoryObj } from '@storybook/react'
import { TextFormField } from '.'
import { Form } from '@radix-ui/react-form'

function Component({
  name,
  value,
  placeHolder,
}: {
  name: string
  value: string
  placeHolder?: string
}) {
  return (
    <Form className="w-[200px]">
      <TextFormField.Root name={name}>
        <TextFormField.Label name={name} />
        <TextFormField.Input
          name={name}
          value={value}
          placeHolder={placeHolder}
        />
      </TextFormField.Root>
    </Form>
  )
}

const meta = {
  title: 'Components/ Molecule/TextFormField',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'test',
    value: 'test',
  },
}

export const NoValue: Story = {
  args: {
    name: 'test',
    value: '',
    placeHolder: 'Type here',
  },
}
