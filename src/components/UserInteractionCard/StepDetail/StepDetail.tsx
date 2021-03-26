import styles from './StepDetail.module.scss';
import { StepDetailInterface } from '../../../common/interface';

const StepDetail = ({
  stepNumber,
  stepName,
  description,
}: StepDetailInterface) => {
  function createMarkup() {
    const string = description ? description : '';
    return { __html: string };
  }
  return (
    <div className={styles.StepDetailContiner}>
      <p className={styles.StepHeader}>
        Step {stepNumber} : {stepName}
      </p>
      <p dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default StepDetail;
