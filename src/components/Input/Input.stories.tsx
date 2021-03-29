import { Story, Meta } from '@storybook/react/types-6-0';

import Input from './index';
import { InputProps } from '../../common/interface';
import { InputTypes } from '../../common/enums';

export default {
  title: 'Atomic Component/Input',
  component: Input,
  argTypes: {
    color: { control: 'color' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: InputTypes.TEXT,
};

export const With_Width = Template.bind({});
With_Width.args = {
  type: InputTypes.TEXT,
  width: '250px',
};
