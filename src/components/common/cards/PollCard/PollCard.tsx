import { Link } from "react-router-dom";
import styles from "./PollCard.module.scss";

type PropTypes = {
  title?: string;
  className?: string;
  img?: string;
  to?: string;
  status?: string;
};

const PollCard = (props: PropTypes) => {
  return (
    <>
      <div className={`${styles.card} ${props.className || ""}`}>
        <div className={styles.card_img}>
          <img
            src={
              props.img ||
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt={props.title}
          />
          <span className={`${styles.status} ${styles[props?.status || ""]}`}>
            {props.status}
          </span>
        </div>
        <Link
          className={styles.title}
          to={props.to || ""}
          title={props.title}
          style={{ textAlign: "center", width: "100%" }}
        >
          {props.title}
        </Link>
      </div>
    </>
  );
};

export default PollCard;
