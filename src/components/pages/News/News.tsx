import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { API, ROUTES } from "../../../utils/constant";
import {
  getComputedDate,
  htmlToPlainText,
  removeTags,
} from "../../../utils/utils";
import Banner from "../../common/Banner/Banner";
import Button from "../../common/Button/Button";
import NoRecord from "../../common/NoRecord/NoRecord";
import NewsCard from "../../common/cards/NewsCard/NewsCard";
import NewsCardShimmer from "../../common/cards/NewsCard/NewsCardShimmer/NewsCardShimmer";
import styles from "./News.module.scss";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [news, setNews] = useState<any>([]);
  const fetchNews = async () => {
    try {
      let response = await axios.get(
        API.NEWS.replace(":rows", "10").replace(":page", `${page}`)
      );
      if (response.data && response.data.data) {
        const ar: any = [...response.data.data.rows];
        setTotal(response.data.data.count);
        setNews((prev: any) => [...prev, ...ar]);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [page]);
  return (
    <>
      <Helmet>
        <title>News | Black and Belonging</title>
      </Helmet>
      <Banner title="News" />
      <section className={styles.news}>
        <Container>
          <Row className="justify-content-center">
            {
              loading ? (
                Array.from({ length: 3 }).map((item, index) => {
                  return (
                    <Col lg={4} md={6} key={String(item) + index}>
                      <NewsCardShimmer />
                    </Col>
                  );
                })
              ) : news.length > 0 ? (
                news.map((item: any) => {
                  return (
                    <Col key={item.id} lg={4} md={6}>
                      <NewsCard
                        date={getComputedDate(item.createdAt).formattedDate()}
                        // img={item.fimg_url}
                        title={htmlToPlainText(item.title)}
                        description={removeTags(item.content)}
                        to={ROUTES.VIEW_NEWS.replace(":id", item.slug)}
                        category={item.categoryId}
                        img={item.feature_image}
                      />
                    </Col>
                  );
                })
              ) : (
                <Col md={12}>
                  <NoRecord title="News" />
                </Col>
              )
              // null
            }
          </Row>
          {total !== news.length && (
            <Button
              className={styles.view_btn}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Load More...
            </Button>
          )}
        </Container>
      </section>
    </>
  );
};

export default News;
