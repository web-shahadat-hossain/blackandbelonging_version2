import Button from "../../Button/Button";
import styles from "./ConfirmModal.module.scss";
import Modal from "../Modal/Modal";
import { WarningIcon } from "../../../../assets/icons/icons";

type propTypes = {
  title?: string;
  subtext?: string;
  handleNext?: () => void;
  handleClose?: () => void;
  show?: boolean;
  loading?: boolean;
};

const ConfirmModal = (props: propTypes) => {
  return (
    <>
      <Modal
        show={props.show}
        className={styles.confirmation}
        handleClose={props.handleClose}
      >
        <span className={styles.warning}>
          <WarningIcon />
        </span>
        <h3>{props.title}</h3>
        <p>{props.subtext}</p>
        <div className={styles.action}>
          <Button loading={props.loading} onClick={props.handleNext} fluid>
            Continue
          </Button>
          <Button variant="bordered_danger" onClick={props.handleClose} fluid>
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
