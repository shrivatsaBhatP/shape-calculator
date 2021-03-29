import styles from './CardNavigation.module.scss';
import Button from '../../Button';
import {
  CardNavigationInterface,
  StepProviderProps,
} from '../../../common/interface';
import { useStep } from '../../../hooks/useStep';

const CardNavigation = ({
  onCancel,
  onClickNext,
  submitLabel,
}: CardNavigationInterface) => {
  const userData: StepProviderProps = useStep();

  return (
    <div className={styles.CardNavigation}>
      <Button onClick={onClickNext} type="submit">
        {submitLabel}
      </Button>
      {userData.step !== 3 ? (
        <span>
          or
          <Button btnStyle="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </span>
      ) : null}
    </div>
  );
};

export default CardNavigation;
