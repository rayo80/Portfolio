import { Meta, StoryObj } from '@storybook/react';
import MainSection from './MainSection';


const meta: Meta<typeof MainSection> = {
    title: 'Components/MainSection',
    component: MainSection,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof MainSection>;

export const Example: Story = {
    args: {
        greeting: "Hi, my name is",
        name: "Lorem Ipsum.",
        subtitle: "Lorem Ipsum is simply dummy text.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..",
        resume: {
            text: "Download Resume",
            goTo: "www.your_domain.com/resume.pdf"
        },
    }
  };