import axios from "axios";
import parse from "html-react-parser";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CalenderIcon,
  EmailIcon2,
  FlagIcon,
  LeftIcon,
} from "../../../assets/icons/icons";
import { API, ROUTES } from "../../../utils/constant";
import { htmlToPlainText } from "../../../utils/utils";
import Banner from "../../common/Banner/Banner";
import Button from "../../common/Button/Button";
import Shimmer from "../../common/Shimmer/Shimmer";
import styles from "./ViewNews.module.scss";

const ViewNews = () => {
  const [loading, setLoading] = useState(true);
  const [recentPostsLoading, setRecentPostsLoading] = useState(true);
  const [singleNews, setSingleNews] = useState<any>({});
  const [news, setNews] = useState<{}[]>([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();
  const fetchNews = async (): Promise<string | undefined> => {
    setLoading(true);
    setRecentPostsLoading(true);
    try {
      let response = await axios.get(
        API.NEWS.replace(":rows", "100").replace(":page", "1")
      );
      if (response.data.data) {
        setNews(response.data.data.rows);
        let foundItem = response.data.data.rows.find(
          (item: any) => item.slug === id
        );
        setRecentPostsLoading(false);
        if (foundItem) {
          return foundItem.id;
        }
      }
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
      setRecentPostsLoading(false);
    }
  };

  const getCategory = useMemo(() => {
    return async (id: string | number) => {
      setLoading(true);
      try {
        let response = await axios.get(
          API.GET_NEWS_CATEGORY.replace(":id", `${id}`)
        );
        if (response.data && response.data.data) {
          setCategory(response.data.data.name);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };
  }, []);
  const fetchSingleNews = async (id: string) => {
    setLoading(true);
    try {
      let response = await axios.get(`${API.SINGLE_NEWS}${id}`);
      setSingleNews(response.data.data);
      getCategory(response.data.data.categoryId);
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews().then((response) => {
      if (response) {
        fetchSingleNews(response);
      }
    });
  }, [id]);
  return (
    <>
      <Helmet>
        <title>
          {htmlToPlainText(singleNews?.title)} | Black and Belonging
        </title>
        <meta
          name="description"
          content={htmlToPlainText(singleNews?.content).slice(0, 100)}
        />
      </Helmet>
      <Banner title={loading ? "" : htmlToPlainText(singleNews?.title)} />
      <section className={styles.view_news}>
        <Container>
          <Row>
            <Col md={8}>
              <div className={styles.news_details}>
                <Button
                  onClick={() => navigate(-1)}
                  className={styles.back_btn}
                >
                  <LeftIcon /> Back
                </Button>
                <div className={styles.news_metadetails}>
                  <ul>
                    <li>
                      {loading ? (
                        <Shimmer height={18} width={18} className="me-2" />
                      ) : (
                        <CalenderIcon />
                      )}
                      {loading ? (
                        <Shimmer height={18} width={100} />
                      ) : (
                        <h4>
                          {moment(singleNews?.createdAt).format(
                            "MMMM Do, YYYY"
                          )}
                        </h4>
                      )}
                    </li>
                    <li>
                      {loading ? (
                        <Shimmer height={18} width={18} className="me-2" />
                      ) : (
                        <EmailIcon2 />
                      )}
                      {loading ? (
                        <Shimmer height={18} width={100} />
                      ) : (
                        <h4>Black and Belonging</h4>
                      )}
                    </li>
                    <li>
                      {loading ? (
                        <Shimmer height={18} width={18} className="me-2" />
                      ) : (
                        <FlagIcon />
                      )}
                      {loading ? (
                        <Shimmer height={18} width={100} />
                      ) : (
                        <h4>{category}</h4>
                      )}
                    </li>
                  </ul>
                </div>
                <div className={styles.news_img}>
                  {loading ? (
                    <Shimmer height={400} fluid />
                  ) : (
                    <img src={singleNews?.feature_image} alt="news image" />
                  )}
                </div>
                <div className={styles.news_text}>
                  {/* <p> */}
                  {loading ? (
                    <>
                      <Shimmer height={15} fluid />
                      <Shimmer height={15} width={"90%"} />
                      <Shimmer height={15} width={"80%"} />
                      <Shimmer height={15} width={"85%"} />
                      <Shimmer height={15} width={"85%"} />
                      <Shimmer height={15} width={"95%"} />
                      <Shimmer height={15} width={"85%"} />
                    </>
                  ) : (
                    parse(singleNews?.content || "")
                  )}
                  {/* </p> */}
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.sidebar}>
                <div className={styles.recent}>
                  <h3>Recent Posts</h3>
                  <ul>
                    {recentPostsLoading ? (
                      <>
                        {Array.from({ length: 4 }).map((item, index) => {
                          return (
                            <li key={String(item) + index}>
                              <Shimmer
                                height={20}
                                className="me-3"
                                width={40}
                              />
                              <Shimmer height={20} fluid />
                            </li>
                          );
                        })}
                      </>
                    ) : (
                      news.length > 0 &&
                      news.slice(0, 5).map((item: any) => {
                        console.log({ item });

                        return (
                          <li key={item.id}>
                            <span className={styles.recent_post_date}>
                              {moment(item.createdAt).format("MM/DD/YY")}
                            </span>
                            <Link
                              className={item.id === id ? styles.active : ""}
                              to={ROUTES.VIEW_NEWS.replace(":id", item.slug)}
                            >
                              {htmlToPlainText(item?.title)}
                            </Link>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </div>
                {singleNews.tags && singleNews.tags.length > 0 && (
                  <div className={styles.tags}>
                    <h3>Tags</h3>
                    {singleNews.tags.length > 0 ? (
                      <ul>
                        {singleNews.tags.map((item: string) => (
                          <li>
                            <h4>{item}</h4>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ViewNews;
