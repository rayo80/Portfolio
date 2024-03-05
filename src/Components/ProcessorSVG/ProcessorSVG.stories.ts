import { Meta, StoryObj } from '@storybook/react';
import ProcessorSVG from './ProcessorSVG';



const meta: Meta<typeof ProcessorSVG> = {
    title: 'Components/ProcessorSVG',
    component: ProcessorSVG,
    tags: ['autodocs'],
  };



export default meta;
type Story = StoryObj<typeof ProcessorSVG>;

export const Example: Story = {
    args: {
    }
}