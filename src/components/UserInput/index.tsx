import React from 'react';
import styles from './UserInput.module.scss';
import { UserInputProps } from '../../common/interface';
import Input from '../Input';
import Text from '../Text';

const UserInput: React.FC<UserInputProps> = ({ label, ...props }) => {
  return (
    <div className={styles.Container}>
      <Text weight={600}>{label}</Text>
      <Input {...props} />
    </div>
  );
};

export default UserInput;
