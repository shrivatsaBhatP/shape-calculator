import React from 'react';
import styles from './Text.module.scss';
import { TextProps } from '../../common/interface';

const Text: React.FC<TextProps> = ({
  type = 'default',

  children,
  ...props
}) => {
  const style = {
    color: props.color,
    fontSize: props.size,
    fontWeight: props.weight,
  };

  const className = [styles.Text, styles[type]].join(' ');

  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
};

export default Text;
