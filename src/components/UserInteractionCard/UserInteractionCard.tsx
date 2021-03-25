import React, { useState } from "react";
import styles from "./UserInteractionCard.module.scss";

import {
  StepDetailInterface,
  CardNavigationInterface,
  SelectionOptionType,
} from "../../common/interface";

import Button from "../Button";
import RadioButton from "../Button/Radio";

const initialState = {
  step1: {
    id: 11,
    stepNumber: 1,
    stepName: "Select your shape",
    submitValue: "Go to step 2",
    description: (type = "unknown", value: any) =>
      `Please select the shape that you would like to calculate the area of and press the button "Go to step 2"`,
    value: "",
  },
  step2: {
    id: 12,
    stepNumber: 2,
    stepName: "Insert your values",
    submitValue: "Go to step 3",
    description: (type = "unknown", value: any) =>
      `You have selected a <strong>${type}</strong>, please input the required variables.`,
    value: "",
  },
  step3: {
    id: 12,
    stepName: "Insert your values",
    submitValue: "Start over",
    description: (type = "unknown", value: any) => {
      let measures = [];
      for (let key in value) {
        measures.push(`${key} of ${value[key]}`);
      }

      return `You have calculated the area of a <strong>${type}</strong>
      with a ${
        measures.length > 1 ? measures.join(" and ") : measures
      }. Below is your result:`;
    },
    value: "",
  },
};

const selectionOptions = [
  { id: 1, value: "rectangle", label: "Rectangle" },
  { id: 2, value: "circle", label: "Circle" },
  { id: 3, value: "square", label: "Square" },
  { id: 4, value: "ellipse", label: "Ellipse" },
];

const UserInteractionCard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState({
    type: undefined,
    payload: {
      rectangle: { length: "", breadth: "" },
      circle: { diameter: "" },
      square: { square: "" },
      ellipse: { axisA: "", axisB: "" },
    },
  });

  return (
    <div className={styles.CardContainer}>
      <StepMediator
        step={step}
        setStep={setStep}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export default UserInteractionCard;

const StepMediator = ({ step = 1, setStep, value, setValue }: any) => {
  //@ts-ignore
  const stepDetail = initialState[`step${step}`];
  const handleNextClick = () => {
    let newStep = step + 1;
    setStep(newStep > 3 ? (newStep = 1) : newStep);
  };

  const handleCancel = () => {
    setStep(1);
    setValue({
      type: undefined,
      payload: {
        rectangle: { length: "", breadth: "" },
        circle: { diameter: "" },
        square: { square: "" },
        ellipse: { axisA: "", axisB: "" },
      },
    });
  };

  return (
    <>
      <StepElement
        value={value}
        setValue={setValue}
        step={step}
        stepName={stepDetail.stepName}
        description={stepDetail.description(
          value.type,
          value.payload[value.type]
        )}
        onClickNext={handleNextClick}
        onCancel={handleCancel}
        submitLabel={stepDetail?.submitValue}
      />
    </>
  );
};

const StepElement = ({
  value,
  setValue,
  step,
  stepName,
  submitLabel,
  description,
  onClickNext,
  onCancel,
}: any) => {
  const handleOptionChange = (e: any) => {
    const newValue = e.target.value;
    setValue({ ...value, type: newValue });
  };

  let body = (
    <StepOne
      handleSubmit={() => {}}
      handleOptionChange={handleOptionChange}
      selectionOptions={selectionOptions}
      selectedOption={value?.type}
    />
  );

  if (step === 2) {
    body = (
      <StepTwo
        type={value.type}
        onChange={(e: any) => {
          setValue(e);
        }}
        value={value}
      />
    );
  }

  if (step === 3) {
    body = <StepThree type={value.type} value={value.payload} />;
  }
  return (
    <>
      <StepDetail
        stepNumber={step}
        stepName={stepName}
        description={description}
      />
      <form className={styles.CardBody} onSubmit={() => {}}>
        {body}
      </form>
      <CardNavigation
        onClickNext={onClickNext}
        onCancel={onCancel}
        submitLabel={submitLabel}
      />
    </>
  );
};

const StepDetail = ({
  stepNumber,
  stepName,
  description,
}: StepDetailInterface) => {
  function createMarkup() {
    const string = description ? description : "";
    return { __html: string };
  }
  return (
    <div className={styles.StepDetailContiner}>
      <p className={styles.StepHeader}>
        Step {stepNumber} : {stepName}
      </p>
      {/* <p>{description}</p> */}
      <p dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

const CardNavigation = ({
  onCancel,
  onClickNext,
  submitLabel,
}: CardNavigationInterface) => {
  return (
    <div className={styles.CardNavigation}>
      <Button onClick={onClickNext}>{submitLabel}</Button>
      <span>
        or <p onClick={onCancel}>Cancel</p>
      </span>
    </div>
  );
};

const StepOne: React.FC<any> = ({
  handleOptionChange,
  selectionOptions,
  selectedOption,
}) => {
  return (
    <>
      {selectionOptions.map((option: SelectionOptionType) => {
        return (
          <RadioButton
            key={option.id}
            label={option.label}
            id={option.value}
            value={option.value}
            isChecked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
        );
      })}
    </>
  );
};

const StepTwo: React.FC<any> = ({ type, value, onChange }) => {
  const handleOnChange = (e: any) => {
    console.log(value);
    console.log(e.target?.name);
    let newPayload = { ...value.payload };
    newPayload = {
      ...newPayload,
      [type]: { ...newPayload[type], [e.target?.name]: e.target?.value },
    };
    console.log(newPayload);
    onChange({ ...value, payload: newPayload });
  };

  let InputBody = (
    <>
      <label>Diameter</label>
      <input
        name="diameter"
        type="number"
        placeholder="text"
        onChange={handleOnChange}
        value={value.payload["circle"].diameter}
      />
    </>
  );

  if (type === "rectangle") {
    InputBody = (
      <>
        <div>
          <label>Length</label>
          <input
            name="length"
            type="number"
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload["rectangle"].length}
          />
        </div>
        <div>
          <label>Breadth</label>
          <input
            name="breadth"
            type="number"
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload["rectangle"].breadth}
          />
        </div>
      </>
    );
  }

  if (type === "square") {
    InputBody = (
      <>
        <div>
          <label>Length</label>
          <input
            name="square"
            type="number"
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload["square"].square}
          />
        </div>
      </>
    );
  }

  if (type === "ellipse") {
    InputBody = (
      <>
        <div>
          <label>Axis A</label>
          <input
            name="axisA"
            type="number"
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload["ellipse"].axisA}
          />
        </div>
        <div>
          <label>Axis B</label>
          <input
            name="axisB"
            type="number"
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload["ellipse"].axisB}
          />
        </div>
      </>
    );
  }
  return <>{InputBody}</>;
};

const StepThree: React.FC<any> = ({ type, value }) => {
  let result = null;
  switch (type) {
    case "rectangle":
      {
        result = value["rectangle"].length * value["rectangle"].breadth;
      }
      break;
    case "square":
      {
        result = value["square"].square * value["square"].square;
      }
      break;
    case "circle":
      {
        result =
          Math.PI *
          (value["circle"].diameter / 2) *
          (value["circle"].diameter / 2);
      }
      break;
    case "ellipse":
      {
        result = Math.PI * value["ellipse"].axisA * value["ellipse"].axisB;
      }
      break;
  }
  return <p>The Area is {result}</p>;
};
