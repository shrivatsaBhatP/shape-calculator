import { Types } from './enums';

const stepDetail = {
  id: 0,
  stepName: '',
  submitValue: '',
  description: (type: TypesType, value: ValueType) => '',
};

type StepDetailType = typeof stepDetail;
export type StepType = 'step1' | 'step2' | 'step3';

export type InitialStateType = {
  step1: StepDetailType;
  step2: StepDetailType;
  step3: StepDetailType;
};

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

export type TypesType = Types;

export type InitialValueType = {
  type: TypesType;
  payload: PayloadType;
};

export type ValueType = {
  type: TypesType;
  payload: PayloadType;
};

export type SelectionOptionType = {
  id: number | string;
  value: string;
  label: string;
};
