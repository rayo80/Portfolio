

import { Meta, StoryObj } from '@storybook/react';
import ProjectsSection from './ProjectsSection';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof ProjectsSection> = {
    title: 'Components/ProjectsSection',
    component: ProjectsSection,
    tags: ['autodocs'],
    decorators: [withRouter]
  };



export default meta;
type Story = StoryObj<typeof ProjectsSection>;

export const Example: Story = {
    args: {
        subtitle: {
            "numberOrder": "3",
            "text": "Last Projects",
            "width": 40
        },
        projects: [
            {
                img: 'img/projects/projectImg.png',
                type: "Featured Project",
                title: "Minimun Project",
                stack: "ReactJs, Storybook, TypeScript, Sass, Jest",
                github: "https://github.com/",
                info: "There are many variations <strong>variations</strong> of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                url: "google.com",
            },
            {
                img: 'img/projects/projectImg.png',
                type: "Featured Project",
                title: "Minimun Project",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                stack: "ReactJs, Storybook, TypeScript, Sass, Jest",
                github: "https://github.com/",
                url: "google.com",
            },
            {
                img: 'img/projects/projectImg.png',
                type: "Featured Project",
                title: "Minimun Project",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                stack: "ReactJs, Storybook, TypeScript, Sass, Jest",
                github: "https://github.com/",
                url: "google.com",
            },
            {
                img: 'img/projects/projectImg.png',
                type: "Featured Project",
                title: "Minimun Project",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                stack: "ReactJs, Storybook, TypeScript, Sass, Jest",
                github: "https://github.com/",
                url: "google.com",
            },
        ]
    }
    
}