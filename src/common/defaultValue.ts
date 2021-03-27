export const initialState = {
  step1: {
    id: 11,
    stepNumber: 1,
    stepName: 'Select your shape',
    submitValue: 'Go to step 2',
    description: (type = 'unknown', value: any) =>
      `Please select the shape that you would like to calculate the area of and press the button "Go to step 2"`,
  },
  step2: {
    id: 12,
    stepNumber: 2,
    stepName: 'Insert your values',
    submitValue: 'Go to step 3',
    description: (type = 'unknown', value: any) =>
      `You have selected a <strong>${type}</strong>, please input the required variables.`,
  },
  step3: {
    id: 12,
    stepName: 'Your result',
    submitValue: 'Start over',
    description: (type = 'unknown', value: any) => {
      let measures = [];
      for (let key in value) {
        measures.push(`${key} of ${value[key]}`);
      }

      return `You have calculated the area of a <strong>${type}</strong>
      with a ${
        measures.length > 1 ? measures.join(' and ') : measures
      }. Below is your result:`;
    },
  },
};

export const selectionOptions = [
  { id: 1, value: 'rectangle', label: 'Rectangle' },
  { id: 2, value: 'circle', label: 'Circle' },
  { id: 3, value: 'square', label: 'Square' },
  { id: 4, value: 'ellipse', label: 'Ellipse' },
];

export const defaultPayload = {
  rectangle: { length: 0, breadth: 0 },
  circle: { diameter: 0 },
  square: { length: 0 },
  ellipse: { axisA: 0, axisB: 0 },
};

export const initialValue = {
  type: undefined,
  payload: defaultPayload,
};
