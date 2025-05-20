import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  EnrolledIcon,
  LeftIcon,
  TracksIcon,
} from "../../../assets/icons/icons";
import { API, ROUTES } from "../../../utils/constant";
import { htmlToPlainText } from "../../../utils/utils";
import Button from "../../common/Button/Button";
import LinkButton from "../../common/Button/LinkButton";
import Shimmer from "../../common/Shimmer/Shimmer";
import styles from "./ViewMixtape.module.scss";

const ViewMixtape = () => {
  const [loading, setLoading] = useState(true);
  const [mixtape, setMixtape] = useState<any>({});
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const handleListenMixtapes = () => {
    ref.current?.scrollIntoView({ block: "start" });
  };
  const fetchMixtape = async (id: string) => {
    setLoading(true);
    // setMediaLoading(true);

    try {
      let response = await axios(`${API.MIXTAPE}${id}`);
      if (response.data && response.data.data) {
        setMixtape(response.data.data);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const fetchMixtapes = async (): Promise<string | undefined> => {
    setLoading(true);
    try {
      let response = await axios.get(
        API.MIXTAPES.replace(":rows", "100").replace(":page", `${1}`)
      );
      if (response.data && response.data.data) {
        const ar: any = [...response.data.data.rows];
        let foundItem = ar.find((item: any) => item.slug === id);
        setLoading(false);
        if (foundItem) {
          return foundItem.id;
        }
      }
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("ID", id);

    fetchMixtapes().then((response) => {
      if (response) {
        fetchMixtape(response);
      }
    });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{htmlToPlainText(mixtape?.title)} | Black and Belonging</title>
        <meta
          name="description"
          content={htmlToPlainText(mixtape?.description).slice(0, 100)}
        />
      </Helmet>
      <section className={styles.mixtape}>
        <Container>
          <div className="d-flex align-items-center mb-4">
            <div>
              <Button className={styles.back_btn} onClick={() => navigate(-1)}>
                <LeftIcon /> Back
              </Button>
            </div>
            <div className="ms-auto">
              <LinkButton
                className={styles.mixtape_btn}
                onClick={handleListenMixtapes}
                to={ROUTES.VIEW_MIXTAPE_TRACKLIST.replace(":id", mixtape?.slug)}
              >
                Listen To Mixtapes
              </LinkButton>
            </div>
          </div>
          <Row>
            <Col md={6}>
              <div className={styles.mixtape_left}>
                {loading ? (
                  <Shimmer height={360} fluid />
                ) : (
                  <img src={mixtape?.feature_image} alt="mixtape image" />
                )}
                {loading ? (
                  <Shimmer
                    height={30}
                    width={100}
                    className={styles.category_text_shimmer}
                  />
                ) : (
                  <span className={styles.category_text}>
                    {mixtape?.category_name}
                  </span>
                )}
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.mixtape_right}>
                <div className={styles.mixtape_author}>
                  <div>
                    {loading ? (
                      <>
                        <Shimmer height={14} width={100} /> <br />
                        <Shimmer height={14} width={60} />
                      </>
                    ) : (
                      <>
                        <h6>Organizer</h6>
                        <p>{mixtape?.organizer}</p>
                      </>
                    )}
                  </div>
                </div>
                {loading ? (
                  <Shimmer width="80%" height={24} className="my-4" />
                ) : (
                  <h2>{htmlToPlainText(mixtape?.title)}</h2>
                )}
                <ul className={styles.mixtape_details}>
                  <li>
                    <h4>Enrolled</h4>
                    <div>
                      <EnrolledIcon />
                      <p>
                        {loading ? (
                          <Shimmer width={44} height={44} />
                        ) : (
                          mixtape?.enrolled
                        )}
                      </p>
                    </div>
                  </li>
                  <li>
                    <h4>Tracks</h4>
                    <div>
                      <TracksIcon />
                      <p>
                        {loading ? (
                          <Shimmer width={44} height={44} />
                        ) : (
                          mixtape?.tracks
                        )}
                      </p>
                    </div>
                  </li>
                </ul>
                <div className={styles.tabs}>
                  <div className={styles.tabs_nav}>
                    <Link
                      onClick={handleListenMixtapes}
                      className={
                        location.pathname ===
                        ROUTES.VIEW_MIXTAPE.replace(":id", String(id))
                          ? styles.active
                          : ""
                      }
                      to={ROUTES.VIEW_MIXTAPE.replace(":id", String(id))}
                    >
                      Description
                    </Link>
                    <Link
                      onClick={handleListenMixtapes}
                      className={
                        location.pathname ===
                        ROUTES.VIEW_MIXTAPE_TRACKLIST.replace(":id", String(id))
                          ? styles.active
                          : ""
                      }
                      to={ROUTES.VIEW_MIXTAPE_TRACKLIST.replace(
                        ":id",
                        String(id)
                      )}
                    >
                      Tracklist
                    </Link>
                  </div>
                  <div ref={ref} className={styles.tabs_content}>
                    <Outlet
                      context={{
                        loading,
                        mixtape,
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ViewMixtape;
