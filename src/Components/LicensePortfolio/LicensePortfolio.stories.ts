import { Meta, StoryObj } from '@storybook/react';
import LicensePortfolio from './LicensePortfolio';


const meta: Meta<typeof LicensePortfolio> = {
    title: 'Components/LicencePortfolio',
    component: LicensePortfolio,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof LicensePortfolio>;

export const Example: Story = {
    args: {

        subtitle: {
            numberOrder: "01",
            text: "LicensePortfolio",
            width: 30
        },
        rows: [
            {
            title: "Download Resume",
            items: ["www.your_domain.com/resume.pdf"]
        },
        ]
    }
  };