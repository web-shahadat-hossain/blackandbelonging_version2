import { Spinner } from "react-bootstrap";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <>
      <div className={styles.loading}>
        <Spinner />
      </div>
    </>
  );
};

export default Loader;
