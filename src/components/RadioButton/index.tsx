import React from 'react';

import styles from './RadioButton.module.scss';

import { RadioButtonProps } from '../../common/interface';

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  id,
  isChecked,
  ...props
}) => {
  return (
    <div className={styles.RadioButtonContainer}>
      <input type="radio" id={id} checked={isChecked} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
