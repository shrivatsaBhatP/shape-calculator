import { Story, Meta } from '@storybook/react/types-6-0';

import Button from './index';
import { ButtonProps } from '../../common/interface';

export default {
  title: 'Atomic Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnStyle: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnStyle: 'secondary',
  children: 'Button',
};
