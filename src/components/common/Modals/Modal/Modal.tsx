import { ReactNode } from "react";
import styles from "./Modal.module.scss";
import { Modal as BootstrapModal } from "react-bootstrap";

type propTypes = {
  show?: boolean;
  handleClose?: () => void;
  className?: string;
  title?: string;
  children?: ReactNode;
  backdrop?: boolean | "static";
  closeButton?: boolean;
  centerTitle?: boolean;
};

const Modal = (props: propTypes) => {
  const { closeButton = true, centerTitle } = props;
  return (
    <>
      <BootstrapModal
        className={`${styles.modal} ${props.className || ""}`}
        show={props.show}
        onHide={props.handleClose}
        centered
        backdrop={props.backdrop}
      >
        <BootstrapModal.Header closeButton={closeButton}>
          {props.title && (
            <BootstrapModal.Title
              className={`${centerTitle ? "center-title" : ""}`}
            >
              {props.title}
            </BootstrapModal.Title>
          )}
        </BootstrapModal.Header>
        <BootstrapModal.Body>{props.children}</BootstrapModal.Body>
      </BootstrapModal>
    </>
  );
};

export default Modal;
