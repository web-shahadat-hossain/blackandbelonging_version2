import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setLoading as setGlobalLoading } from "../../../features/loading/loading.slice";
import Lottie from "lottie-react";
import success from "../../../assets/animations/success.json";
import { ShareIcon } from "../../../assets/icons/icons";
import { API, SOCIAL_LINKS } from "../../../utils/constant";
import { htmlToPlainText } from "../../../utils/utils";
import Button from "../../common/Button/Button";
import Loader from "../../common/Loader/Loader";
import ShareModal from "../../common/Modals/ShareModal/ShareModal";
import NoRecord from "../../common/NoRecord/NoRecord";
import PollCardShimmer from "../../common/cards/PollCard/PollCardShimmer/PollCardShimmer";
import { useInView } from "react-intersection-observer";
import styles from "./ViewPoll.module.scss";

const ViewPoll = () => {
  const { slug } = useParams();

  const [show, setShow] = useState(false);
  const [url, setURL] = useState("");
  const { userDetails }: any = useAppSelector((state) => state.user);
  const { loading: globalLoading } = useAppSelector((state) => state.loading);
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [voted, setVoted] = useState({
    voted: false,
    index: -1,
  });
  const dispatch = useAppDispatch();
  const [poll, setPoll] = useState<any>({});
  const [videos, setVideos] = useState<any>([]);
  const [disabledButtons, setDisableButtons] = useState(false);

  const fetchPoll = async () => {
    setLoading(true);
    try {
      let arrayforpolls = await axios.get(
        API.POLLS.replace(":offset", "0").replace(":limit", "100")
      );

      if (arrayforpolls.data && arrayforpolls.data.data.rows) {
        let id = arrayforpolls.data.data.rows.find(
          (item: any) => item.slug === slug
        ).id;

        let response = await axios(`${API.POLL}${id}`);

        if (response.data && response.data.data) {
          setPoll(response.data.data);

          let videosResponse = await axios.get(
            API.POLL_VIDEOS.replace(":id", response.data.data.id).replace(
              ":userId",
              userDetails.userId
            )
          );
          setDisableButtons(
            videosResponse.data.data.filter((item: any) => item.isVoted)
              .length !== 0
          );
          setVideos(
            videosResponse.data.data.filter(
              (item: any) => item.status === "ENABLE"
            )
          );
        }
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  const handleVote = async (id: string, index: number) => {
    dispatch(setGlobalLoading(true));
    setBtnLoading(true);

    try {
      let response: any = await axios.post(API.VOTE, {
        user_id: userDetails?.userId,
        poll_id: poll.id,
        video_id: id,
      });
      if (response.data) {
        fetchPoll();
        toast.success(response.data.message);
        setBtnLoading(false);
        setVoted({
          voted: true,
          index: index,
        });
        dispatch(setGlobalLoading(false));
      }
    } catch (error) {
      setBtnLoading(false);
      dispatch(setGlobalLoading(false));
    }
  };

  useEffect(() => {
    fetchPoll();
  }, []);

  const shareLinks = [
    {
      type: "facebook",
      link: (
        <FacebookShareButton
          url={`${SOCIAL_LINKS.WEBSITE}polls/`}
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
          url={`${SOCIAL_LINKS.WEBSITE}polls/`}
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
          url={`${SOCIAL_LINKS.WEBSITE}polls/`}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      ),
    },
  ];

  const VideoComponent = ({ video_link, thumbnail }: any) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div ref={ref} style={{ minHeight: 215 }}>
        {inView && (
          <video controls width="100%" height="215" poster={thumbnail || ""}>
            <source src={video_link} />
          </video>
        )}
      </div>
    );
  };

  return (
    <>
      {globalLoading && <Loader />}
      <Helmet>
        <title>
          {htmlToPlainText(poll?.title || "")} | Black and Belonging
        </title>
      </Helmet>
      <section className={`${styles.banner}`}>
        <Container>
          <div className={styles.banner_in}>
            <h1>{htmlToPlainText(poll?.title || "")}</h1>
            <ul>
              {shareLinks.map((item) => (
                <li key={item.type}>{item.link}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className={styles.view_polls}>
        <Container>
          <Row className="justify-content-center">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Col key={index} lg={4} md={6}>
                  <PollCardShimmer />
                </Col>
              ))
            ) : videos && videos.length > 0 ? (
              videos.map((item: any, index: number) => (
                <Col key={item.id} lg={4} md={6}>
                  <div className={styles.poll_card}>
                    <VideoComponent
                      video_link={item.video_link}
                      thumbnail={item.thumbnail} // যদি thumbnail থাকে
                    />
                    <button
                      onClick={() => {
                        setShow(true);
                        setURL(`${SOCIAL_LINKS.WEBSITE}polls`);
                      }}
                      className={styles.share_icon}
                    >
                      <ShareIcon />
                    </button>
                    <h3 className="poll_titles_custom">
                      {item.title} ({item.video_count}/{item.total_votes_count})
                    </h3>
                    <div className={styles.loading}>
                      <span
                        style={{ width: `${item.total_votes}%` || "33%" }}
                      ></span>
                      <p>{`${item.total_votes}%` || "33%"}</p>
                    </div>
                    <Button
                      disabled={disabledButtons || item.isVoted}
                      loading={btnLoading}
                      fluid
                      onClick={() => handleVote(item.id || "", index)}
                    >
                      {item.isVoted ? "Voted" : "Vote"}
                    </Button>
                    {voted.index === index && (
                      <Lottie
                        className={styles.animation}
                        animationData={success}
                        loop={false}
                      />
                    )}
                  </div>
                </Col>
              ))
            ) : (
              <Col md={12}>
                <NoRecord title="Poll" />
              </Col>
            )}
          </Row>
        </Container>
      </section>
      <ShareModal show={show} handleClose={() => setShow(false)} url={url} />
    </>
  );
};

export default ViewPoll;
