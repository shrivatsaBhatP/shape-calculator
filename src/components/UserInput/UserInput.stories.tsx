import { Story, Meta } from '@storybook/react/types-6-0';

import UserInput from './index';
import { UserInputProps } from '../../common/interface';
import { InputTypes } from '../../common/enums';

export default {
  title: 'Molecule Component/User Input',
  component: UserInput,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<UserInputProps> = (args) => <UserInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input:',
  placeholder: 'enter input',
  type: InputTypes.NUMBER,
};
