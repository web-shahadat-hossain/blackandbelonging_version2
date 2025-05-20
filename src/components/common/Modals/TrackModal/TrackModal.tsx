import { useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import styles from "./TrackModal.module.scss";

type propTypes = {
  show?: boolean;
  handleClose?: () => void;
  video?: string;
  title?: string;
};

const TrackModal = (props: propTypes) => {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    video.current?.play();
  }, [props.show]);
  return (
    <>
      <Modal
        show={props.show}
        handleClose={props.handleClose}
        title={props.title}
        className={styles.track}
      >
        <video ref={video} controls autoPlay>
          <source src={props.video} />
        </video>
      </Modal>
    </>
  );
};

export default TrackModal;
