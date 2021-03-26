import React, { useState } from 'react';
import styles from './UserInteractionCard.module.scss';

import StepMediator from './StepMediator';
import { initialValue } from '../../common/defaultValue';
import { InitialValueType } from '../../common/type';

const UserInteractionCard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [value, setValue] = useState<InitialValueType>(initialValue);

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
