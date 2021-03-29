import { useContext } from 'react';
import { StepProvider } from '../provider/stepsProvider';

export const useStep = () => useContext(StepProvider);
