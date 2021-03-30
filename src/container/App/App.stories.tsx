import { Story, Meta } from '@storybook/react/types-6-0';

import App from './index';

export default {
  title: 'Page/App',
  component: App,
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const Default = Template.bind({});
