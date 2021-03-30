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
