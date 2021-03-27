import { Story, Meta } from '@storybook/react/types-6-0';

import Header from './index';

export default {
  title: 'Molecule Component/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
