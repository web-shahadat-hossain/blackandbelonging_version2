import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
import Modal from "../Modal/Modal";
import styles from "./ShareModal.module.scss";

type PropTypes = {
  show?: boolean;
  handleClose?: () => void;
  url?: string;
};

const ShareModal = (props: PropTypes) => {
  const shareLinks = [
    {
      type: "facebook",
      link: (
        <FacebookShareButton
          url={props.url || ""}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      ),
    },
    {
      type: "instagram",
      link: (
        <EmailShareButton
          url={props.url || ""}
          className="Demo__some-network__share-button"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      ),
    },

    {
      type: "linkedin",
      link: (
        <LinkedinShareButton
          url={props.url || ""}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      ),
    },
  ];
  return (
    <Modal
      show={props.show}
      title="Share"
      handleClose={props.handleClose}
      className={styles.share_modal}
    >
      <ul>
        {shareLinks.map((item) => {
          return <li key={item.type}>{item.link}</li>;
        })}
      </ul>
    </Modal>
  );
};

export default ShareModal;
