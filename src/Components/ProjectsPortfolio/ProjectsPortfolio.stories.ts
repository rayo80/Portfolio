

import { Meta, StoryObj } from '@storybook/react';
import ProjectsPortfolio from './ProjectsPortfolio';

const meta: Meta<typeof ProjectsPortfolio> = {
    title: 'Components/ProjectsPortfolio',
    component: ProjectsPortfolio,
    tags: ['autodocs'],
  };



export default meta;
type Story = StoryObj<typeof ProjectsPortfolio>;

export const Example: Story = {
    args: {
        "header": {
            "numberOrder": "04",
            "text": "Yeah, I work hard"
        },
        "arrProjects": [
            {
                "img": {
                    "source": "https://renzoqc.dev/files/project-test.png",
                },
                "description": {
                    "type": "Featured Project",
                    "title": "Lorem Ipsum is simply dummy text",
                    "info": "There are many variations <strong>variations</strong> of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                    "stack": "ReactJs, Storybook, TypeScript, Sass, Jest",
                    "github": "https://github.com/",
                    "url": "google.com",
                },
            },
            {
                "img": {
                    "source": "https://renzoqc.dev/files/project-test.png",
                },
                "description": {
                    "type": "Featured Project",
                    "title": "Lorem Ipsum is simply dummy text",
                    "info": "There are many <strong>variations</strong> of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                    "stack": "ReactJs, Storybook, TypeScript, Sass, Jest",
                    "github": "https://github.com/",
                    "url": "google.com",
                },
            },
            {
                "img": {
                    "source": "https://renzoqc.dev/files/project-test.png",
                },
                "description": {
                    "type": "Featured Project",
                    "title": "Lorem Ipsum is simply dummy text",
                    "info": "There are many <strong>variations</strong> of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                    "stack": "ReactJs, Storybook, TypeScript, Sass, Jest",
                    "github": "https://github.com/",
                    "url": "google.com",
                },
            }
        ]
    }
}
