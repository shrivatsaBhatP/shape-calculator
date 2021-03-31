import { ChildrenProps } from '../../common/interface';
import styles from './AdVerticalBanner.module.scss';

function AdVerticalBanner({ children }: ChildrenProps) {
  return (
    <div className={styles.Container}>
      {children ? children : <p>{`120 x 240 Ad(Vertical Banner)`}</p>}
    </div>
  );
}

export default AdVerticalBanner;
