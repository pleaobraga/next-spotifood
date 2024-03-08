import type { Meta, StoryObj } from '@storybook/react'
import { TextFormField } from '.'
import { Form } from '@radix-ui/react-form'

const meta = {
  title: 'Components/ Molecule/TextFormField',
  component: TextFormField.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextFormField.Root>

export default meta
type Story = StoryObj<typeof meta>

function defaultChildren() {
  return (
    <>
      <TextFormField.Label />
      <TextFormField.Input placeHolder="Type here" />
    </>
  )
}

export const Default: Story = {
  args: {
    name: 'test',
    children: defaultChildren(),
  },
  render: ({ name, children }) => {
    return (
      <Form className="w-[200px]">
        <TextFormField.Root name={name}>{children}</TextFormField.Root>
      </Form>
    )
  },
}

function withoutLabelChildren() {
  return <TextFormField.Input placeHolder="Type here" />
}

export const WithoutLabel: Story = {
  args: {
    name: 'test',
    children: withoutLabelChildren(),
  },
  render: ({ name, children }) => {
    return (
      <Form className="w-[200px]">
        <TextFormField.Root name={name}>{children}</TextFormField.Root>
      </Form>
    )
  },
}
