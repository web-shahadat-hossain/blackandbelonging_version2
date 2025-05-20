import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  EmailIcon,
  EmailIcon2,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../assets/icons/icons";
import { setContact } from "../../../features/contact/contact.slice";
import { API, parse } from "../../../utils/constant";
import Banner from "../../common/Banner/Banner";
import Loader from "../../common/Loader/Loader";
import styles from "./Contact.module.scss";

type ContactType = {
  contact_title: string;
  email_text: string;
  email_url: string;
  twitter_text: string;
  twitter_url: string;
  youtube_text: string;
  youtube_url: string;
  instagram_text: string;
  instagram_url: string;
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const getContactData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ data: ContactType }>(API.GET_CONTACT);
      if (response.data && response.data.data) {
        dispatch(setContact(response.data.data));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  const {
    contact_title,
    email_text,
    email_url,
    instagram_text,
    instagram_url,
    twitter_text,
    twitter_url,
    youtube_text,
    youtube_url,
  } = useAppSelector((state) => state.contact.contact);

  return (
    <>
      {loading && <Loader />}
      <Helmet>
        <title>Contact | Black and Belonging</title>
      </Helmet>
      <Banner title={parse(contact_title)} />
      <section className={styles.contact}>
        <Container>
          <Row>
            <Col xl={3} md={6}>
              <Link
                to={`mailto:${email_url}`}
                className={`${styles.contact_card}`}
              >
                <EmailIcon />
                <h3>Email</h3>
                <p>{parse(email_text)}</p>
                <div className={styles.card_bg_icon}>
                  <EmailIcon2 />
                </div>
              </Link>
            </Col>
            <Col xl={3} md={6}>
              <Link
                target="_blank"
                rel="noreferrer"
                to={twitter_url}
                className={`${styles.contact_card}`}
              >
                <TwitterIcon />
                <h3>Twitter</h3>
                <p>{parse(twitter_text)}</p>
                <div className={styles.card_bg_icon}>
                  <TwitterIcon />
                </div>
              </Link>
            </Col>
            <Col xl={3} md={6}>
              <Link
                target="_blank"
                rel="noreferrer"
                to={youtube_url}
                className={`${styles.contact_card}`}
              >
                <YoutubeIcon />
                <h3>Youtube</h3>
                <p>{parse(youtube_text)}</p>
                <div className={styles.card_bg_icon}>
                  <YoutubeIcon />
                </div>
              </Link>
            </Col>
            <Col xl={3} md={6}>
              <Link
                target="_blank"
                rel="noreferrer"
                to={instagram_url}
                className={`${styles.contact_card}`}
              >
                <InstagramIcon />
                <h3>Instagram</h3>
                <p>{parse(instagram_text)}</p>
                <div className={styles.card_bg_icon}>
                  <InstagramIcon />
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
