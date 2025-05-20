import Shimmer from "../../../Shimmer/Shimmer";
import styles from "./PollCardShimmer.module.scss";

const PollCardShimmer = () => {
  return (
    <>
      <div className={styles.shimmer_box}>
        <Shimmer className={styles.shimmer_img} />
        <Shimmer className={styles.shimmer_title} />
        <Shimmer className={styles.shimmer_type} />
      </div>
    </>
  );
};

export default PollCardShimmer;
