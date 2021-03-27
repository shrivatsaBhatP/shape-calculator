import { ButtonProps } from '../../common/interface';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  children,
  btnStyle = 'primary',
  backgroundColor,
  ...props
}) => {
  return (
    <button
      className={[styles.Button, styles[btnStyle]].join(' ')}
      style={{ backgroundColor }}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
