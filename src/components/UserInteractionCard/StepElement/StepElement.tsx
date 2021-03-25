import styles from "./StepElement.module.scss";
import { StepOne, StepTwo, StepThree } from "../Steps";
import StepDetail from "../StepDetail";
import CardNavigation from "../CardNavigation";
import { selectionOptions } from "../../../common/defaultValue";

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
      <form
        className={styles.CardBody}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
