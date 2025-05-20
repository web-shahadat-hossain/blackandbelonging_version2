import Button from "../../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./InfoModal.module.scss";

type propTypes = {
  show?: boolean;
  handleClose?: () => void;
};

const InfoModal = (props: propTypes) => {
  const { handleClose } = props;

  return (
    <Modal
      show={Boolean(props.show)}
      handleClose={props.handleClose}
      title="Almost There! Verify Your Email."
      className={styles.otp_modal}
      backdrop={"static"}
      closeButton={false}
      centerTitle={true}
    >
      <p>
        Welcome to Black and Belonging! For security, we'll send you a
        verification link. If you did not receive an email in your inbox, please
        check your spam folder.
      </p>

      <Button onClick={handleClose} fluid>
        Got It
      </Button>
    </Modal>
  );
};

export default InfoModal;
