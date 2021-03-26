import { InitialValueType, SelectionOptionType, PayloadType } from './type';

export interface StepDetailInterface {
  stepNumber: number | undefined;
  stepName: string | undefined;
  description: string | undefined;
}

export interface ButtonInterface {
  children: React.ReactChild | React.ReactChild[] | React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export interface RadioButtonInterface {
  id: string | undefined;
  label?: string | undefined;
  name?: string | undefined;
  value: string | number | readonly string[] | undefined;
  isChecked?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface CardNavigationInterface {
  onCancel?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  onClickNext?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  submitLabel: string | undefined;
}

export interface StepMediatorInterface {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  value: InitialValueType;
  setValue: React.Dispatch<React.SetStateAction<InitialValueType>>;
}

export interface StepElementInterface {
  step: number;
  value: InitialValueType;
  setValue: React.Dispatch<React.SetStateAction<InitialValueType>>;
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
