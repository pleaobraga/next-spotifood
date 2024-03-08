import type { Meta, StoryObj } from '@storybook/react'

import { Filter } from '.'

const meta = {
  title: 'Components/ Organism/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className=" w-[900px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Filter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
