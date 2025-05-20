import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { API, ROUTES } from "../../../utils/constant";
import Banner from "../../common/Banner/Banner";
import NoRecord from "../../common/NoRecord/NoRecord";
import MixtapeCard from "../../common/cards/MixtapeCard/MixtapeCard";
import MixtapeCardShimmer from "../../common/cards/MixtapeCard/MixtapeCardShimmer/MixtapeCardShimmer";
import styles from "./Mixtapes.module.scss";
import Button from "../../common/Button/Button";
import { getEnabledData } from "../../../utils/utils";

const Mixtapes = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [mixtapes, setMixtapes] = useState<any>([]);
  const [total, setTotal] = useState(0);

  const fetchMixtapes = async () => {
    try {
      let response = await axios.get(
        API.MIXTAPES.replace(":rows", "10").replace(":page", `${page}`)
      );
      if (response.data && response.data.data) {
        const ar: any = [...response.data.data.rows];
        setTotal(response.data.data.count);
        setMixtapes((prev: any) => [...prev, ...ar]);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMixtapes();
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Mixtapes | Black and Belonging</title>
      </Helmet>
      <Banner title="Mixtapes" />
      <section className={styles.mixtapes}>
        <Container>
          <Row className="justify-content-center">
            {loading ? (
              Array.from({ length: 3 }).map((item, index) => {
                return (
                  <Col lg={4} md={6} key={String(item) + index}>
                    <MixtapeCardShimmer />
                  </Col>
                );
              })
            ) : getEnabledData(mixtapes).length > 0 ? (
              getEnabledData(mixtapes).map((item: any) => {
                return (
                  <Col key={item?.id} lg={4} md={6}>
                    <MixtapeCard
                      feature_image={item.feature_image}
                      title={item.title}
                      to={ROUTES.VIEW_MIXTAPE.replace(":id", item?.slug)}
                      type={item.type}
                      category={item?.category_name}
                      date={moment(item.created_at).format("MMMM Do YYYY")}
                    />
                  </Col>
                );
              })
            ) : (
              <Col sm={12}>
                <NoRecord title="Mixtapes" />
              </Col>
            )}
          </Row>
          {total !== mixtapes.length && (
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

export default Mixtapes;
