import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { NoRecordIcon, PlayIcon } from "../../../../assets/icons/icons";
import { API } from "../../../../utils/constant";
import TrackModal from "../../../common/Modals/TrackModal/TrackModal";
import Shimmer from "../../../common/Shimmer/Shimmer";
import styles from "./MixtapeTracklist.module.scss";
import { getEnabledData } from "../../../../utils/utils";

const MixtapeTracklist = () => {
  const [show, setShow] = useState(false);
  const [track, setTrack] = useState<{ title?: string; videoUrl?: string }>({});
  const [tracks, setTracks] = useState([]);
  const { loading: Loading, mixtape } = useOutletContext<{
    loading: boolean;
    mixtape?: any;
  }>();
  const [loading, setLoading] = useState(true);
  const getTracks = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        API.GET_SINGLE_TRACK.replace(":id", mixtape.id)
      );
      if (response.data && response.data.data) {
        setLoading(false);
        setTracks(response.data.data);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (mixtape.id) {
      getTracks();
    }
  }, [mixtape]);
  return (
    <>
      <div className={styles.list}>
        {loading || Loading ? (
          <>
            <Shimmer fluid />
            <Shimmer fluid />
            <Shimmer fluid />
            <Shimmer fluid />
            <Shimmer fluid />
            <Shimmer fluid />
          </>
        ) : getEnabledData(tracks).length > 0 ? (
          <ul>
            {getEnabledData(tracks).map((item: any) => {
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setTrack({ title: item?.name, videoUrl: item?.url });
                      setShow(true);
                    }}
                    className={styles.item}
                  >
                    <PlayIcon />
                    <p>{item?.name}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={styles.no_record}>
            <NoRecordIcon />
            <p>No Tracklist Found</p>
          </div>
        )}
      </div>
      <TrackModal
        show={show}
        handleClose={() => setShow(false)}
        title={track.title}
        video={track.videoUrl}
      />
    </>
  );
};

export default MixtapeTracklist;
