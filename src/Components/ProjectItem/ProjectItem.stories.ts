

import { Meta, StoryObj } from '@storybook/react';
import ProjectItem from './ProjectItem';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof ProjectItem> = {
    title: 'Components/ProjectItem',
    component: ProjectItem,
    tags: ['autodocs'],
    decorators: [withRouter]
  };



export default meta;
type Story = StoryObj<typeof ProjectItem>;

export const Example: Story = {
    args: {
        img: 'img/projects/projectImg.png',
        title: "Minimun Project",
        type: "text",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        stack: "string",
        github: "string",
        url: "string", 
        }
}