import { Story, Meta } from '@storybook/react/types-6-0';

import Text from './index';
import { TextProps } from '../../common/interface';

export default {
  title: 'Atomic Component/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    weight: {
      control: { type: 'range', min: 100, max: 900, step: 100 },
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum vehicula sapien non dapibus. Praesent et risus lectus. Vestibulum egestas luctus nisi ac ornare. In accumsan velit non scelerisque feugiat.',
};

export const Heading = Template.bind({});
Heading.args = {
  type: 'heading',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum vehicula sapien non dapibus. Praesent et risus lectus. Vestibulum egestas luctus nisi ac ornare. In accumsan velit non scelerisque feugiat.',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  type: 'paragraph',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum vehicula sapien non dapibus. Praesent et risus lectus. Vestibulum egestas luctus nisi ac ornare. In accumsan velit non scelerisque feugiat.',
};
