import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setAbout } from "../../../features/about/about.slice";
import { API, parse } from "../../../utils/constant";
import HeadingText from "../../common/HeadingText/HeadingText";
import Loader from "../../common/Loader/Loader";
import AboutSection from "../Homepage/About/About";
import OurTribe from "../Homepage/OurTribe/OurTribe";
import styles from "./About.module.scss";
import Community from "./Community/Community";

type AboutType = {
  banner_top_text: string;
  banner_middle_text: string;
  banner_bottom_text: string;
  section_two_main_title: string;
  section_two_title: string;
  section_two_description: string;
  section_three_title: string;
  section_three_description: string;
  section_four_title: string;
  section_four_description: string;
  welcome_message_title: string;
  welcome_message_description: string;
  linkedin_text: string;
  linkedin_url: string;
};

const About = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const getAboutData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ data: AboutType }>(API.GET_ABOUT);
      if (response.data && response.data.data) {
        dispatch(setAbout(response.data.data));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAboutData();
  }, []);
  const {
    welcome_message_description,
    welcome_message_title,
    linkedin_text,
    linkedin_url,
  } = useAppSelector((state) => state.about.about);
  return (
    <>
      {loading && <Loader />}
      <Helmet>
        <title>About | Black and Belonging</title>
      </Helmet>
      {/* <Banner className={styles.banner} title="About Us" /> */}
      <AboutSection />
      <Community />

      <OurTribe />
      <section className={styles.welcome}>
        <Container>
          <div className={styles.welcome_in}>
            <HeadingText>{parse(welcome_message_title)}</HeadingText>
            <p>{parse(welcome_message_description)}</p>
            <Link to={linkedin_url} target="_blank" rel="noreferrer">
              {parse(linkedin_text)}
            </Link>
          </div>
        </Container>
      </section>
      {/* <Contact /> */}
    </>
  );
};

export default About;
