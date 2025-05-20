import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Container, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  InstagramIcon,
  LinkedIcon,
  RightArrow,
  TwitterIcon,
  YoutubeIcon,
} from "../../../assets/icons/icons";
import logo from "../../../assets/logos/logo.png";
import { setLoading } from "../../../features/loading/loading.slice";
import { API, ROUTES, SOCIAL_LINKS } from "../../../utils/constant";
import Button from "../Button/Button";
import LinkButton from "../Button/LinkButton";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { auth } = useAppSelector((state) => state.user);
  const { loading } = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  const handleNewsletter = async (email: string): Promise<void> => {
    dispatch(setLoading(true));
    try {
      let type = "NEWSLETTER";
      let response = await axios.post(API.NEWSLETTER, { email, type });

      if (response.data && response.data.message) {
        toast.success("Thank you for subscribing");
        dispatch(setLoading(false));
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_in}>
          <div className={styles.footer_logo}>
            <Link className={styles.logo} to={ROUTES.HOME}>
              <img src={logo} alt="black and belonging logo" />
            </Link>
            <p>
              We work hand-in-hand with young people to co-design educational
              spaces where youth want to be and want to learn.
            </p>
            {!auth ? (
              <LinkButton fluid to={ROUTES.LOGIN}>
                Login
              </LinkButton>
            ) : null}
          </div>
          <ul>
            <li>
              <h3>Pages</h3>
            </li>
            <li>
              <NavLink to={ROUTES.HOME}>home</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.MIXTAPES}>mixtapes</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.NEWS}>news</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.USER_PLAYBOOKS}>Playbook</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ABOUT}>about us</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.CONTACT}>contact us</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Community</h3>
            </li>
            <li>
              <NavLink to={ROUTES.TERMS_OF_USE}>Terms of Use</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.COOKIE_POLICY}>Cookie Policy</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.COMMUNITY_GUIDELINES}>
                Community Guidelines
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.DMCA_NOTICE}>DMCA Notice</NavLink>
            </li>
          </ul>
          <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter to get the latest updates about our
              programs, events, workshops, and more.
            </p>
            <Formik
              initialValues={{ mail: "" }}
              onSubmit={async (values, { resetForm }) => {
                await handleNewsletter(values.mail);
                resetForm();
              }}
            >
              {({ isValid }) => {
                return (
                  <Form>
                    <Field
                      name="mail"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                    <Button type="submit" disabled={!isValid}>
                      {loading ? <Spinner /> : <RightArrow />}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div className={styles.footer_end}>
          <p>
            © Copyright {new Date().getFullYear()} Black and Belonging. All
            rights reserved.
          </p>
          <ul>
            <li>
              <Link to={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer">
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link
                to={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link to={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
                <LinkedIcon />
              </Link>
            </li>
            <li>
              <Link to={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noreferrer">
                <YoutubeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
