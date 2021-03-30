import React from 'react';
import StepElement from './StepElement';
import { StepProviderProps } from '../../common/interface';
import { PayloadType, StepType, TypesType } from '../../common/type';
import { initialState, initialValue } from '../../common/defaultValue';
import { defaultPayload } from '../../common/defaultValue';
import { useStep } from '../../hooks/useStep';
import styles from './UserInteractionCard.module.scss';
import { Steps, Types } from '../../common/enums';

function Step(strings: Object, step: number): StepType {
  return step === 3 ? Steps.STEP3 : step === 2 ? Steps.STEP2 : Steps.STEP1;
}

function isValidValue(step: number, type: Types, value: PayloadType) {
  const isNotEmpty = (ele: [string, number]) => ele[1] === null;

  if (step === 1 && !type) return true;
  if (step === 2 && Object.entries(value[type]).every(isNotEmpty)) return true;

  return false;
}

const UserInteractionCard: React.FC = () => {
  const userData: StepProviderProps = useStep();
  const stepNumber: StepType = Step`${userData.step}`;
  const stepDetail = initialState[stepNumber];
  const type: TypesType = userData.value.type ?? 'rectangle';

  const payload =
    userData.value?.payload !== undefined
      ? userData.value?.payload
      : defaultPayload;

  const description = stepDetail.description(type, payload[type]);

  const handleNextClick = () => {
    if (isValidValue(userData.step, type, userData.value.payload)) return;

    let newStep = userData.step + 1;
    newStep === 4 && userData.setValue(initialValue);
    newStep > 3 && (newStep = 1);
    userData.setStep(newStep);
  };

  const handleCancel = () => {
    userData.setStep(1);
    userData.setValue(initialValue);
  };

  return (
    <div className={styles.CardContainer}>
      <StepElement
        stepName={stepDetail.stepName}
        description={description}
        onClickNext={handleNextClick}
        onCancel={handleCancel}
        submitLabel={stepDetail?.submitValue}
      />
    </div>
  );
};

export default UserInteractionCard;
