import { NoRecordIcon } from "../../../assets/icons/icons";
import styles from "./NoRecord.module.scss";

type propTypes = {
  title?: string;
  className?: string;
  completeTitle?: string;
};

const NoRecord = (props: propTypes) => {
  return (
    <>
      <div className={`${styles.no_record} ${props.className || ""}`}>
        <NoRecordIcon />
        <p>
          {props.completeTitle || "No " + (props.title || "Records") + " Found"}
        </p>
      </div>
    </>
  );
};

export default NoRecord;
