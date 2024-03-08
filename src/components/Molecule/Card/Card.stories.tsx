import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'

const meta = {
  title: 'Components/ Molecule/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imgSrc: 'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b',
    link: 'https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR',
    name: 'It Hits Sweden',
  },
}

export const NoImage: Story = {
  args: {
    link: 'https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR',
    name: 'It Hits Sweden',
  },
}
