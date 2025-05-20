import { useOutletContext } from "react-router-dom";
import styles from "./MixtapeDescription.module.scss";
import Shimmer from "../../../common/Shimmer/Shimmer";
import parse from "html-react-parser";

const MixtapeDescription = () => {
  const { loading, mixtape } = useOutletContext<{
    loading: boolean;
    mixtape?: any;
  }>();
  return (
    <>
      <div className={styles.description}>
        {loading ? (
          <>
            <Shimmer fluid height={18} />
            <Shimmer width={"90%"} height={18} />
            <Shimmer width={"80%"} height={18} />
            <Shimmer width={"95%"} height={18} />
            <Shimmer width={"85%"} height={18} />
            <Shimmer width={"70%"} height={18} />
          </>
        ) : (
          parse(mixtape?.description || "")
        )}
      </div>
    </>
  );
};

export default MixtapeDescription;
