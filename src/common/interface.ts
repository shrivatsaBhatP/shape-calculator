export interface StepDetailInterface {
  stepNumber: number | undefined;
  stepName: string | undefined;
  description: string | undefined;
}

export interface ButtonInterface {
  children: React.ReactChild | React.ReactChild[] | React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
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

export type SelectionOptionType = {
  id: number | string;
  value: string;
  label: string;
};
