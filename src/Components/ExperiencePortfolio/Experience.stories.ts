
import { Meta, StoryObj } from '@storybook/react';
import ExperiencePortfolio from './ExperiencePortfolio';


const meta: Meta<typeof ExperiencePortfolio> = {
    title: 'Components/ExperiencePortfolio',
    component: ExperiencePortfolio,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof ExperiencePortfolio>;

export const Unchecked: Story = {
  args : {
    "header": {
        "numberOrder": "03",
        "text": "Where I’ve worked"
    },
    "arrExp": [
        {
            "company": "Lorem Ipsum",
            "title": "Lorem Ipsum Developer",
            "country": "🇺🇸",
            "date": "September 2010 - Current",
            "goTo": "www.google.com",
            "tasks": [
                {
                    "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                },
                {
                    "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                },
                {
                    "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                },
                {
                    "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                }
            ],
        },
        {
            "company": "Lorem Ipsum",
            "title": "Lorem Ipsum Developer",
            "country": "🇺🇸",
            "date": "September 2010 - Current",
            "goTo": "www.google.com",
            "tasks": [
                {
                    "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                },
                {
                    "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                },
                {
                    "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                },
                {
                    "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                }
            ],
        },
    ]
}

  };


