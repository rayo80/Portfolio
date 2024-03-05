import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';


const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof Logo>;

export const Example: Story = {
    args: {
    pathImage: 'img/charmander.png',
    altImage: 'portfolio',
    withText: true,
    }
  };