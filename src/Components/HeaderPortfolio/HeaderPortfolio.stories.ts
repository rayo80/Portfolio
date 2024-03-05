import { Meta, StoryObj } from '@storybook/react';
import HeaderPortfolio from './HeaderPortfolio';


const meta: Meta<typeof HeaderPortfolio> = {
    title: 'Components/HeaderPortfolio',
    component: HeaderPortfolio,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof HeaderPortfolio>;

export const Example: Story = {
    args: {
        logo: {
            pathImage: "https://renzoqc.dev/files/logo-test.png",
            altImage: "portfolio",
            withText: false,
        },
        menuHeader: {
            menu: {
                colorNumber: "cyan-pf",
                colorItem: "white",
                data: [
                    {
                        name: "About",
                        goTo: "#AboutPortfolio"
                    },
                    {
                        name: "Skillsets",
                        goTo: "#SkillsPortfolio"
                    },
                    {
                        name: "Work",
                        goTo: "#ExperiencePortfolio"
                    },
                    {
                        name: "Projects",
                        goTo: "#ProjectsPortfolio"
                    },
                    {
                        name: "Contact",
                        goTo: "#ContactPortfolio"
                    }
                ],
            },
            logo: {
                path: '/'
            },
            resume: {
                name: 'Resume',
                goTo: 'www.your_domain.com/resume.pdf',
                color: 'cyan-pf'
            },
        },
    },
}
