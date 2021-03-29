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
  if (type === Types.ELLIPSE) return Types.ELLIPSE;
  if (type === Types.SQUARE) return Types.SQUARE;
  return Types.RECTANGLE;
}

const StepElement = ({
  stepName,
  submitLabel,
  description,
  onClickNext,
  onCancel,
}: StepElementInterface) => {
  const useData: StepProviderProps = useStep();

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    useData.setValue({ ...useData.value, type: Type`${newValue}` });
  };

  let body = (
    <StepOne
      handleOptionChange={handleOptionChange}
      selectionOptions={selectionOptions}
      selectedOption={useData.value?.type}
    />
  );

  if (useData.step === 2) {
    body = (
      <StepTwo
        type={useData.value.type}
        onChange={useData.setValue}
        value={useData.value}
      />
    );
  }

  if (useData.step === 3) {
    body = (
      <StepThree type={useData.value.type} value={useData.value.payload} />
    );
  }
  return (
    <>
      <StepDetail
        stepNumber={useData.step}
        stepName={stepName}
        description={description}
      />
      <form
        className={styles.CardBody}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
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

export default StepElement;
