import { useState, createContext } from 'react';
import { initialValue } from '../common/defaultValue';
import { ChildrenProps, StepProviderProps } from '../common/interface';
import { ValueType } from '../common/type';

export const StepProvider = createContext<StepProviderProps>({
  step: 0,
  setStep: () => {},
  value: initialValue,
  setValue: () => {},
});

export const Provider = ({ children }: ChildrenProps) => {
  const [step, setStep] = useState<number>(1);
  const [value, setValue] = useState<ValueType>(initialValue);

  // const type: TypesType = value.type ?? 'rectangle';
  // const handleNextClick = () => {
  //   if (isValidValue(step, type, value.payload)) return;

  //   let newStep = step + 1;
  //   newStep === 4 && setValue(initialValue);
  //   newStep > 3 && (newStep = 1);
  //   setStep(newStep);
  // };

  // const handleCancel = () => {
  //   setStep(1);
  //   setValue(initialValue);
  // };

  const providerProps: StepProviderProps = {
    step,
    setStep,
    value,
    setValue,
  };
  return (
    <StepProvider.Provider value={providerProps}>
      {children}
    </StepProvider.Provider>
  );
};

// function isValidValue(step: number, type: string, value: any) {
//   const isNotEmpty = (ele: any) => ele[1] === '';

//   if (step === 1 && !type) return true;
//   if (step === 2 && Object.entries(value[type]).every(isNotEmpty)) return true;

//   return false;
// }
