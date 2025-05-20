import logo from "../../../assets/logos/logo.png";
import styles from "./WebsiteLoader.module.scss";

const WebsiteLoader = () => {
  return (
    <>
      <div className={styles.loader}>
        <img src={logo} alt="black and belonging logo" />
        <h1>Loading...</h1>
      </div>
    </>
  );
};

export default WebsiteLoader;
