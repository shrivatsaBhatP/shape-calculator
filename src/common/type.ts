export type InitialStateType = {
  step1: {
    id: number;
    stepName: string;
    submitValue: string;
    description: (type: string | undefined, value: any) => string;
  };
  step2: {
    id: number;
    stepName: string;
    submitValue: string;
    description: (type: string | undefined, value: any) => string;
  };
  step3: {
    id: number;

    stepName: string;
    submitValue: string;
    description: (type: string | undefined, value: any) => string;
  };
};

export type PayloadType = {
  rectangle: {
    length: number;
    breadth: number;
  };
  circle: {
    diameter: number;
  };
  square: {
    length: number;
  };
  ellipse: {
    axisA: number;
    axisB: number;
  };
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
