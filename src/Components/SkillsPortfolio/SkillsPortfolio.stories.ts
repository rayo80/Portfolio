

import { Meta, StoryObj } from '@storybook/react';
import SkillsPortfolio from './SkillsPortfolio';


const meta: Meta<typeof SkillsPortfolio> = {
    title: 'Components/SkillsPortfolio',
    component: SkillsPortfolio,
    tags: ['autodocs'],
  };



export default meta;
type Story = StoryObj<typeof SkillsPortfolio>;

export const Example: Story = {
    args: {
    header: {
        "numberOrder": "02",
        "text": "Skillsets"
    },
    arrTech: [
        { "name": "test", "position": { "top": "10%", "left": "15%" } },
        { "name": "test", "position": { "top": "4%", "left": "26%" } },
        { "name": "test", "position": { "top": "30%", "left": "22%" } },
        { "name": "test", "position": { "top": "25%", "left": "46%" } },
        { "name": "test", "position": { "top": "10%", "left": "56%" } },
        { "name": "test", "position": { "top": "38%", "left": "66%" } },
        { "name": "test", "position": { "top": "12%", "left": "71%" } },
        { "name": "test", "position": { "top": "28%", "left": "85%" } },
        { "name": "test", "position": { "top": "90%", "left": "11%" } },
        { "name": "test", "position": { "top": "95%", "left": "30%" } },
        { "name": "test", "position": { "top": "85%", "left": "55%" } },
        { "name": "test", "position": { "top": "94%", "left": "73%" } },
        { "name": "test", "position": { "top": "82%", "left": "84%" } },
    ]
}
}