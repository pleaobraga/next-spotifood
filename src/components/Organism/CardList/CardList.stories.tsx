import type { Meta, StoryObj } from '@storybook/react'

import { CardList } from '.'
import { cardListMockFactory } from '@/mocks/CardList.mock'

const meta = {
  title: 'Components/ Organism/CardList',
  component: CardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: cardListMockFactory(),
  },
}
