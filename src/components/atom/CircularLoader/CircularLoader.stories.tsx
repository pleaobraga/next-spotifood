import type { Meta, StoryObj } from '@storybook/react'
import { CircularLoader } from '.'

const meta = {
  title: 'Components/Atom/Circular Loader',
  component: CircularLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CircularLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
