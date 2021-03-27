import { defaultPayload } from './defaultValue';

export type StepDetailType = {
  id: number;
  stepName: string;
  submitValue: string;
  description: (type: string | undefined, value: any) => string;
};

type initialState = {
  step1: StepDetailType;
  step2: StepDetailType;
  step3: StepDetailType;
};

export type InitialStateType = initialState;

const reactangleValue = { length: 0, breadth: 0 };
type RectangleData = typeof reactangleValue;

const circleValue = {
  diameter: 0,
};
type CircleData = typeof circleValue;

const squareValue = {
  length: 0,
};
type SquareData = typeof squareValue;

const ellipseValue = {
  axisA: 0,
  axisB: 0,
};
type EllipseData = typeof ellipseValue;

export type PayloadType = {
  rectangle: RectangleData;
  circle: CircleData;
  square: SquareData;
  ellipse: EllipseData;
};

export type InitialValueType = {
  type: string | undefined;
  payload: PayloadType;
};

export type SelectionOptionType = {
  id: number | string;
  value: string;
  label: string;
};
