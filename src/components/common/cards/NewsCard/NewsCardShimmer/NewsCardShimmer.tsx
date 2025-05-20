import Shimmer from "../../../Shimmer/Shimmer";
import styles from "./NewsCardShimmer.module.scss";

const NewsCardShimmer = () => {
  return (
    <>
      <div className={styles.shimmer_box}>
        <Shimmer className={styles.shimmer_img} />
        <Shimmer className={styles.shimmer_date} />
        <Shimmer className={styles.shimmer_title} />
        <Shimmer className={styles.shimmer_type} />
        <Shimmer fluid height={44} className="mt-3" />
      </div>
    </>
  );
};

export default NewsCardShimmer;
