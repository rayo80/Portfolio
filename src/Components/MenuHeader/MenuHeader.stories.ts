import { Meta, StoryObj } from '@storybook/react';
import MenuHeader from './MenuHeader';


const meta: Meta<typeof MenuHeader> = {
    title: 'Components/MenuHeader',
    component: MenuHeader,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof MenuHeader>;

export const Example: Story = {
    args: {
        menu: {
            colorNumber: 'cyan-pf',
            colorItem: 'red',
            data: [
                {
                    name: 'About',
                    goTo: '#HomePortfolio'
                },
                {
                    name: 'Skillsets',
                    goTo: '#SkillsPortfolio'
                },
                {
                    name: 'Work',
                    goTo: '#ExperiencePortfolio'
                },
                {
                    name: 'Projects',
                    goTo: '#ProjectsPortfolio'
                },
                {
                    name: 'Contact',
                    goTo: '#ContactPortfolio'
                }
            ]
        },
        resume: {
            name: 'Resume',
            goTo: 'www.your_domain.com/resume.pdf',
            color: 'cyan-pf'
        }
    }
}