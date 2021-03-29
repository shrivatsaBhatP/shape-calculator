import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from '../../common/interface';

const Input: React.FC<InputProps> = ({ type, ...props }) => {
  const style: React.CSSProperties = {
    width: props.width,
    fontSize: props.fontSize,
    color: props.color,
  };

  return (
    <>
      <input
        type={type}
        className={[styles.Input].join(' ')}
        value={props.value}
        style={style}
        {...props}
      />
    </>
  );
};

export default Input;
