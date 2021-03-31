import { useStep } from '../../../hooks/useStep';
import styles from './StepElement.module.scss';
import { Types } from '../../../common/enums';
import { selectionOptions } from '../../../common/defaultValue';
import { TypesType } from '../../../common/type';
import {
  StepElementInterface,
  StepProviderProps,
} from '../../../common/interface';

import StepDetail from '../StepDetail';
import CardNavigation from '../CardNavigation';
import { StepOne, StepTwo, StepThree } from '../Steps';

function Type(strings: Object, type: string): TypesType {
  if (type === Types.CIRCLE) return Types.CIRCLE;
  if (type === Types.SQUARE) return Types.SQUARE;
  if (type === Types.ELLIPSE) return Types.ELLIPSE;
  return Types.RECTANGLE;
}

const StepElement = ({
  stepName,
  submitLabel,
  description,
  onClickNext,
  onCancel,
}: StepElementInterface) => {
  const userData: StepProviderProps = useStep();

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    userData.setValue({ ...userData.value, type: Type`${newValue}` });
  };

  const USER_INPUT_BODY =
    userData.step === 3 ? (
      <StepThree type={userData.value.type} value={userData.value.payload} />
    ) : userData.step === 2 ? (
      <StepTwo
        type={userData.value.type}
        onChange={userData.setValue}
        value={userData.value}
      />
    ) : (
      <StepOne
        handleOptionChange={handleOptionChange}
        selectionOptions={selectionOptions}
        selectedOption={userData.value?.type}
      />
    );

  return (
    <>
      <StepDetail
        stepNumber={userData.step}
        stepName={stepName}
        description={description}
      />
      <form
        className={styles.CardBody}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        {USER_INPUT_BODY}
      </form>
      <CardNavigation
        onClickNext={onClickNext}
        onCancel={onCancel}
        submitLabel={submitLabel}
      />
    </>
  );
};

export default StepElement;
