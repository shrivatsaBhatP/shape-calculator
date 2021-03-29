import { InputTypes } from './enums';
import { InitialValueType, SelectionOptionType, PayloadType } from './type';

export interface ChildrenProps {
  children:
    | JSX.Element
    | JSX.Element[]
    | React.ReactNode
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[];
}

export interface StepProviderProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  value: InitialValueType;
  setValue: React.Dispatch<React.SetStateAction<InitialValueType>>;
}

export interface StepDetailInterface {
  stepNumber: number | undefined;
  stepName: string | undefined;
  description: string | undefined;
}

export interface ButtonProps {
  children: React.ReactChild | React.ReactChild[] | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  backgroundColor?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  btnStyle?: 'primary' | 'secondary';
}

export interface InputProps {
  type?: InputTypes;
  value?: string | number | readonly string[];
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
  fontSize?: string;
  color?: string;
  placeholder?: string;
}

export interface RadioButtonProps {
  id?: string;
  label?: string;
  name?: string;
  value?: string | number | readonly string[];
  isChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextProps {
  children?: React.ReactNode;
  color?: string;
  size?: string;
  type?: 'heading' | 'paragraph' | 'default' | 'sub-heading';
  weight?: number;
}

export interface CardNavigationInterface {
  onCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickNext?: () =>
    | void
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined;
  submitLabel: string | undefined;
}

export interface StepMediatorInterface {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  value: InitialValueType;
  setValue: React.Dispatch<React.SetStateAction<InitialValueType>>;
}

export interface StepElementInterface {
  stepName: string;
  description: string;
  onClickNext: () => void;
  onCancel: () => void;
  submitLabel: string;
}

export interface StepsOneInterface {
  selectedOption?: string;
  selectionOptions: SelectionOptionType[];
  handleOptionChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface StepsTwoInterface {
  type?: string;
  value: InitialValueType;
  onChange: (
    e: InitialValueType
  ) => void | React.Dispatch<React.SetStateAction<InitialValueType>>;
}

export interface StepsThreeInterface {
  type?: string;
  value: PayloadType;
}
