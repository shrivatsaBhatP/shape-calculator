import { Story, Meta } from '@storybook/react/types-6-0';

import RadioButton from './index';
import { RadioButtonProps } from '../../common/interface';

export default {
  title: 'Atomic Component/Radio',
  component: RadioButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
  id: 'radio',
  value: 'radio',
};
