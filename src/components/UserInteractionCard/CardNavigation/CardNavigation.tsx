import styles from "./CardNavigation.module.scss";
import Button from "../../Button";
import { CardNavigationInterface } from "../../../common/interface";

const CardNavigation = ({
  onCancel,
  onClickNext,
  submitLabel,
}: CardNavigationInterface) => {
  return (
    <div className={styles.CardNavigation}>
      <Button onClick={onClickNext}>{submitLabel}</Button>
      <span>
        or <p onClick={onCancel}>Cancel</p>
      </span>
    </div>
  );
};

export default CardNavigation;
