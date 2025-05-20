import moment from "moment";
import { Link } from "react-router-dom";
import {
  CalenderIcon,
  JoinIcon,
  LocationIcon,
} from "../../../../assets/icons/icons";
import { ROUTES } from "../../../../utils/constant";
import LinkButton from "../../Button/LinkButton";
import styles from "./RsvpCard.module.scss";

type propTypes = {
  title?: string;
  videoUrl?: string;
  start?: string;
  end?: string;
  location?: string;
  id?: string;
  slug?: string;
};

const RsvpCard = (props: propTypes) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_video}>
          <video controls>
            <source src={props.videoUrl} />
          </video>
        </div>
        <div className={styles.card_details}>
          <Link
            to={ROUTES.VIEW_RSVP.replace(":id", props.slug || "")}
            className={styles.title}
          >
            {props.title}
          </Link>
          <div className={styles.dates}>
            <div>
              <h4>
                <CalenderIcon />
                Start
              </h4>
              <p>{moment(props.start).format("MMMM Do YYYY")}</p>
            </div>
            <div>
              <h4>
                <CalenderIcon />
                End
              </h4>
              <p>{moment(props.end).format("MMMM Do YYYY")}</p>
            </div>
          </div>
          {props.location && (
            <div className={`${styles.location} mb-3`}>
              <div>
                <p>
                  <LocationIcon />
                  {props.location}
                </p>
              </div>
            </div>
          )}
          <LinkButton
            to={ROUTES.VIEW_RSVP.replace(":id", props.slug || "")}
            className={styles.join_btn}
          >
            <JoinIcon /> Join Now{" "}
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default RsvpCard;
