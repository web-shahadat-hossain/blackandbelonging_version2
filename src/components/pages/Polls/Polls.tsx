import { useEffect, useState } from "react";
import styles from "./Polls.module.scss";
import axios from "axios";
import { API, ROUTES } from "../../../utils/constant";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import Banner from "../../common/Banner/Banner";
import { Col, Container, Row } from "react-bootstrap";
import PollCardShimmer from "../../common/cards/PollCard/PollCardShimmer/PollCardShimmer";
import { htmlToPlainText } from "../../../utils/utils";
import PollCard from "../../common/cards/PollCard/PollCard";
import NoRecord from "../../common/NoRecord/NoRecord";

const Polls = () => {
  const [loading, setLoading] = useState(true);
  const [polls, setPolls] = useState([]);

  const fetchPolls = async () => {
    try {
      let response = await axios.get(
        API.POLLS.replace(":offset", "0").replace(":limit", "100")
      );
      if (response.data && response.data.data.rows) {
        setPolls(
          response.data.data.rows.filter(
            (item: any) => item.status === "ENABLE"
          )
        );
        setLoading(false);
      }
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  return (
    <>
      <Helmet>
        <title>Polls | Black and Belonging</title>
      </Helmet>
      <Banner title="Polls" />
      <section className={styles.polls}>
        <Container>
          <Row className="justify-content-center">
            {loading ? (
              Array.from({ length: 3 }).map((item, index) => {
                return (
                  <Col lg={4} md={6} key={String(item) + index}>
                    <PollCardShimmer />
                  </Col>
                );
              })
            ) : polls.length > 0 ? (
              polls.map((item: any) => {
                return (
                  <Col key={item?.id} lg={4} md={6}>
                    <PollCard
                      // status={item?.status}
                      title={htmlToPlainText(item.title)}
                      to={ROUTES.VIEW_POLL.replace(":slug", item?.slug)}
                      img={item?.feature_image}
                    />
                  </Col>
                );
              })
            ) : (
              <Col sm={12}>
                <NoRecord title="Polls" />
              </Col>
            )}
          </Row>
          {/* <Button className={styles.view_btn}>Load More...</Button> */}
        </Container>
      </section>
    </>
  );
};

export default Polls;
