import React from 'react';

import styles from './RadioButton.module.scss';

import { RadioButtonInterface } from '../../../common/interface';

const RadioButton: React.FC<RadioButtonInterface> = ({
  label,
  name,
  value,
  id,
  isChecked,
  onChange,
}) => {
  return (
    <div className={styles.RadioButtonContainer}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
