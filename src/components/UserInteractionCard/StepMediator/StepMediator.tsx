import styles from "./StepMediator.module.scss";
import StepElement from "../StepElement";
import { initialState, initialValue } from "../../../common/defaultValue";

const StepMediator = ({ step = 1, setStep, value, setValue }: any) => {
  //@ts-ignore
  const stepDetail = initialState[`step${step}`];

  const handleNextClick = (e: any) => {
    if (isValidValue(step, value)) return;

    let newStep = step + 1;
    setStep(newStep > 3 ? (newStep = 1) && setValue(initialValue) : newStep);
  };

  const handleCancel = () => {
    setStep(1);
    setValue(initialValue);
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

export default StepMediator;

function isValidValue(step: number, value: any) {
  const isNotEmpty = (ele: any) => ele[1] === "";
  if (step === 1 && !value?.type) return true;
  if (
    step === 2 &&
    Object.entries(value?.payload[value?.type]).every(isNotEmpty)
  )
    return true;
  return false;
}
