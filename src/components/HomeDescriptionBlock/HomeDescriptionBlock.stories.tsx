import { Story, Meta } from '@storybook/react/types-6-0';

import HomeDescriptionBlock from './index';

export default {
  title: 'Molecule Component/HomeDescriptionBlock',
  component: HomeDescriptionBlock,
} as Meta;

const Template: Story = (args) => <HomeDescriptionBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
