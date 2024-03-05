
import { Meta, StoryObj } from '@storybook/react';
import AboutPortfolio from '.';

const meta: Meta<typeof AboutPortfolio> = {
    title: 'Components/AboutPortfolio',
    component: AboutPortfolio,
    tags: ['autodocs'],
  };



export default meta;
type Story = StoryObj<typeof AboutPortfolio>;

export const Example: Story = {
    args: {
        "header": {
            "numberOrder": "01",
            "text": "About Me"
        },
        "pathImage": "https://renzoqc.dev/files/photo-profile-test.png",
        "arrAbout": 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n"
        ,
        "arrThoughts": [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        ]
    }
}