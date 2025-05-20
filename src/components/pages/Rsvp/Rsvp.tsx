import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { API } from "../../../utils/constant";
import { getEnabledData } from "../../../utils/utils";
import Banner from "../../common/Banner/Banner";
import Button from "../../common/Button/Button";
import EventCardShimmer from "../../common/cards/EventCard/EventCardShimmer/EventCardShimmer";
import RsvpCard from "../../common/cards/RsvpCard/RsvpCard";
import NoRecord from "../../common/NoRecord/NoRecord";
import styles from "./Rsvp.module.scss";

const Rsvp = () => {
  const [loading, setLoading] = useState(true);
  const [rsvp, setRsvp] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [rows] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchRsvp = async () => {
    try {
      let response = await axios.get(
        API.RSVP.GET_ALL.replace(":rows", `${rows}`).replace(":page", `${page}`)
      );
      if (response.data && response.data.data) {
        setTotal(response.data.data.count);
        setRsvp((prev: any) => [...prev, ...response.data.data.rows]);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRsvp();
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Rsvp | Black and Belonging</title>
      </Helmet>
      <Banner title="Rsvp" />
      <section className={styles.rsvp}>
        <Container>
          <Row className="justify-content-center">
            {loading ? (
              Array.from({ length: 3 }).map((item, index) => {
                return (
                  <Col md={4} key={String(item) + index}>
                    <EventCardShimmer />
                  </Col>
                );
              })
            ) : getEnabledData(rsvp).length > 0 ? (
              getEnabledData(rsvp).map((item: any) => {
                return (
                  <Col key={item.id} lg={4} md={6}>
                    <RsvpCard
                      title={item.title}
                      videoUrl={item.video_link}
                      start={item.rsvp_start}
                      end={item.rsvp_end}
                      location={item.rsvp_location}
                      id={item.id}
                      slug={item.slug}
                    />
                  </Col>
                );
              })
            ) : (
              <Col Col sm={12}>
                <NoRecord title="Rsvp" />
              </Col>
            )}
          </Row>
          {total !== rsvp.length && (
            <Button
              onClick={() => setPage((prev) => prev + 1)}
              className={styles.view_btn}
            >
              Load More...
            </Button>
          )}
        </Container>
      </section>
    </>
  );
};

export default Rsvp;
