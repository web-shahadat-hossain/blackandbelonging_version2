import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { API } from "../../../utils/constant";
import Banner from "../../common/Banner/Banner";
import Button from "../../common/Button/Button";
import EventCard from "../../common/cards/EventCard/EventCard";
import EventCardShimmer from "../../common/cards/EventCard/EventCardShimmer/EventCardShimmer";
import styles from "./Events.module.scss";
import NoRecord from "../../common/NoRecord/NoRecord";
import { getEnabledData } from "../../../utils/utils";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [rows] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchEvents = async () => {
    try {
      let response = await axios.get(
        API.EVENTS.replace(":rows", `${rows}`).replace(":page", `${page}`)
      );
      if (response.data && response.data.data) {
        setTotal(response.data.data.count);
        setEvents((prev: any) => [...prev, ...response.data.data.rows]);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Events | Black and Belonging</title>
      </Helmet>
      <Banner title="Events" />
      <section className={styles.events}>
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
            ) : getEnabledData(events).length > 0 ? (
              getEnabledData(events).map((item: any) => {
                return (
                  <Col key={item.id} lg={4} md={6}>
                    <EventCard
                      title={item.title}
                      videoUrl={item.video_link}
                      start={item.event_start}
                      end={item.event_end}
                      location={item.event_location}
                      id={item.id}
                      slug={item.slug}
                    />
                  </Col>
                );
              })
            ) : (
              <Col Col sm={12}>
                <NoRecord title="Events" />
              </Col>
            )}
          </Row>
          {total !== events.length && (
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

export default Events;
