import type { Meta, StoryObj } from '@storybook/react'
import { FilterButton } from '.'

const meta = {
  title: 'Components/Atom/FilterButton',
  component: FilterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
