import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '.'

const meta = {
  title: 'Components/ Atom/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-[200px] w-[200px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imgSrc: 'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b',
    alt: 'image test',
  },
}

export const NoImage: Story = {
  args: {
    alt: 'empty image test',
  },
}
