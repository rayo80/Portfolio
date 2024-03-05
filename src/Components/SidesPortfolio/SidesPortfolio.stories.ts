import { Meta, StoryObj } from '@storybook/react';
import SidesPortfolio from './SidesPortfolio';


const meta: Meta<typeof SidesPortfolio> = {
    title: 'Components/SidesPortfolio',
    component: SidesPortfolio,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof SidesPortfolio>;

export const Example: Story = {
    args: {
        left: {
            github: {
                show: true,
                url: 'https://www.github.com/'
            },
            instagram: {
                show: true,
                url: 'https://www.instagram.com/'
            },
            twitter: {
                show: true,
                url: 'https://www.twitter.com/'
            },
            linkedin: {
                show: true,
                url: 'https://www.linkedin.com/'
            },
            editor: {
                show: true,
                url: 'https://www.codepen.com/'
            }
        },
        right: {
            email: 'renzo-test@test.com'
        }
    }
}