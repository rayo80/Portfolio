import { Meta, StoryObj } from '@storybook/react';
import Image from './Image';


const meta: Meta<typeof Image> = {
    title: 'Components/Image',
    component: Image,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof Image>;

export const Example: Story = {
    args: {
        classImg: 'RQ-w-50',
        pathImage: 'img/bartolito.png',
        altImage: 'portfolio',
        border: true,
        fade: true,
    }
}

