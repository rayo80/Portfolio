

import { Meta, StoryObj } from '@storybook/react';
import SubtitlePortfolio from './SubtitlePorfolio';

const meta: Meta<typeof SubtitlePortfolio> = {
    title: 'Components/SubtitlePortfolio',
    component: SubtitlePortfolio,
    tags: ['autodocs'],
  };



export default meta;
type Story = StoryObj<typeof SubtitlePortfolio>;

export const Example: Story = {
    args: {
        "numberOrder": "04",
        "text": "Yeah, I work hard",
        "width": 45
    }
}
