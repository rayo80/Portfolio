
import { Meta, StoryObj } from '@storybook/react';
import ContactPortfolio from './Contact';


const meta: Meta<typeof ContactPortfolio> = {
    title: 'Components/ContactPortfolio',
    component: ContactPortfolio,
    tags: ['autodocs'],
  };


export default meta;
type Story = StoryObj<typeof ContactPortfolio>;

export const Unchecked: Story = {
    args: {
        header: {
            "numberOrder": "05",
            "text": "What’s Next?"
        },
        phrase: "Get In Touch",
        content1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        content2: "I’d love to hear from you!",
        buttonGoTo: "test@test.com",
        buttonText: "Say Hello",
        signature: "Designed & Built by Lorem Ipsum"
    }
  };


