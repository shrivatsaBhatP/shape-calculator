import styles from './Steps.module.scss';
import RadioButton from '../../RadioButton';
import { SelectionOptionType, PayloadType } from '../../../common/type';
import {
  StepsOneInterface,
  StepsTwoInterface,
  StepsThreeInterface,
} from '../../../common/interface';
import UserInput from '../../UserInput';
import { InputTypes } from '../../../common/enums';
import Text from '../../Text';

const StepOne: React.FC<StepsOneInterface> = ({
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

const StepTwo: React.FC<StepsTwoInterface> = ({ type, value, onChange }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPayload: PayloadType = { ...value.payload };
    newPayload = {
      ...newPayload,

      [type]: { ...newPayload[type], [e.target?.name]: e.target?.value },
    };

    onChange({ ...value, payload: newPayload });
  };

  let InputBody = (
    <div className={styles.Container}>
      <UserInput
        label="Diameter :"
        name="diameter"
        type={InputTypes.NUMBER}
        placeholder="text"
        onChange={handleOnChange}
        value={value.payload['circle'].diameter}
      />
    </div>
  );

  if (type === 'rectangle') {
    InputBody = (
      <>
        <div className={styles.Container}>
          <UserInput
            label="Length :"
            name="length"
            type={InputTypes.NUMBER}
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload['rectangle'].length}
          />
        </div>
        <div className={styles.Container}>
          <UserInput
            label="Breadth :"
            name="breadth"
            type={InputTypes.NUMBER}
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload['rectangle'].breadth}
          />
        </div>
      </>
    );
  }

  if (type === 'square') {
    InputBody = (
      <>
        <div className={styles.Container}>
          <UserInput
            label="Length :"
            name="length"
            type={InputTypes.NUMBER}
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload['square'].length}
          />
        </div>
      </>
    );
  }

  if (type === 'ellipse') {
    InputBody = (
      <>
        <div className={styles.Container}>
          <UserInput
            label="Axis A:"
            name="axisA"
            type={InputTypes.NUMBER}
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload['ellipse'].axisA}
          />
        </div>
        <div className={styles.Container}>
          <UserInput
            label="Axis B:"
            name="axisB"
            type={InputTypes.NUMBER}
            placeholder="text"
            onChange={handleOnChange}
            value={value.payload['ellipse'].axisB}
          />
        </div>
      </>
    );
  }
  return <>{InputBody}</>;
};

const StepThree: React.FC<StepsThreeInterface> = ({ type, value }) => {
  let result = 0;
  switch (type) {
    case 'rectangle':
      result = value['rectangle'].length * value['rectangle'].breadth;

      break;
    case 'square':
      result = value['square'].length * value['square'].length;

      break;
    case 'circle':
      result =
        Math.PI *
        (value['circle'].diameter / 2) *
        (value['circle'].diameter / 2);

      break;
    case 'ellipse':
      result = Math.PI * value['ellipse'].axisA * value['ellipse'].axisB;

      break;
  }

  return (
    <div className={styles.ResultContainer}>
      <Text size={'1.25rem'} weight={600}>
        The Area is {result.toFixed(2)}
      </Text>
    </div>
  );
};

export { StepOne, StepTwo, StepThree };
