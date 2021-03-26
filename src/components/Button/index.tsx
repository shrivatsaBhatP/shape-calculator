import { ButtonInterface } from '../../common/interface';
import styles from './Button.module.scss';

const Button: React.FC<ButtonInterface> = ({
  children,
  onClick = () => null,
  type = 'button',
}) => {
  return (
    <button type={type} onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
};

export default Button;
