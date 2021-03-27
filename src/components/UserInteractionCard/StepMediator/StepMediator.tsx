// import styles from "./StepMediator.module.scss";
import StepElement from '../StepElement';
import { initialState, initialValue } from '../../../common/defaultValue';
import { StepMediatorInterface } from '../../../common/interface';
import { PayloadType } from '../../../common/type';
import { defaultPayload } from '../../../common/defaultValue';

const StepMediator: React.FC<StepMediatorInterface> = ({
  step = 1,
  setStep,
  value,
  setValue,
}) => {
  const stepNumber = `step${step}`;
  //@ts-ignore
  const stepDetail = initialState[stepNumber];

  const payload: PayloadType =
    value?.payload !== undefined ? value?.payload : defaultPayload;

  const type = value?.type ? value?.type : 'square';
  //@ts-ignore
  const description = stepDetail.description(type, payload[type]);

  const handleNextClick = () => {
    if (isValidValue(step, type, value.payload)) return;

    let newStep = step + 1;
    newStep === 4 && setValue(initialValue);
    newStep > 3 && (newStep = 1);
    setStep(newStep);
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
        description={description}
        onClickNext={handleNextClick}
        onCancel={handleCancel}
        submitLabel={stepDetail?.submitValue}
      />
    </>
  );
};

export default StepMediator;

function isValidValue(step: number, type: string, value: any) {
  const isNotEmpty = (ele: any) => ele[1] === '';

  if (step === 1 && !type) return true;
  if (step === 2 && Object.entries(value[type]).every(isNotEmpty)) return true;

  return false;
}
