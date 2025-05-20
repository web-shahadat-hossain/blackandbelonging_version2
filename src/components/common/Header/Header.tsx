import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import logo from "../../../assets/logos/logo.png";
import { ROUTES, SOCIAL_LINKS } from "../../../utils/constant";
import LinkButton from "../Button/LinkButton";
import styles from "./Header.module.scss";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const Header = () => {
  // const location = useLocation();
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { auth } = useAppSelector((state) => state.user);
  const handleClick = () => {
    document.body.clientWidth < 991 && setActive(!active);
  };

  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.scrollY > 10);
    };
    setScrolled(window.scrollY > 10);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.active : ""}`}>
        <Container>
          <div className={styles.header_in}>
            <Link className={styles.logo} to={ROUTES.HOME}>
              <img src={logo} alt="black and belonging logo" />
            </Link>
            <div className={styles.nav}>
              <div
                className={`${styles.sidebar} ${active ? styles.active : ""}`}
              >
                <img
                  src={logo}
                  alt="black and beloning logo"
                  className={`${styles.sidebar_logo} d-lg-none`}
                />
                <ul>
                  <li>
                    <NavLink onClick={handleClick} to={ROUTES.HOME}>
                      home
                    </NavLink>
                  </li>
                  <li>
                    <a
                      onClick={handleClick}
                      target="_blank"
                      rel="noreferrer"
                      href={SOCIAL_LINKS.INITIATVES}
                    >
                      Initiatives
                    </a>
                  </li>
                  <li>
                    <NavLink onClick={handleClick} to={ROUTES.MIXTAPES}>
                      mixtapes
                    </NavLink>
                  </li>
                  {/* <li><NavLink onClick={handleClick} to={ROUTES.EVENTS}>events</NavLink></li> */}

                  <li>
                    <NavLink onClick={handleClick} to={ROUTES.NEWS}>
                      news
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleClick} to={ROUTES.USER_PLAYBOOKS}>
                      playbook
                    </NavLink>
                  </li>
                  {/* <li><NavLink onClick={handleClick} to={ROUTES.POLLS}>polls</NavLink></li>*/}
                  {/* <li><NavLink onClick={handleClick} to={ROUTES.EVENTS}>Events</NavLink></li> */}
                  {/* <li><NavLink onClick={handleClick} to={ROUTES.GALLERY}>Gallery</NavLink></li> */}
                  {/* <li><Link onClick={handleClick} to={`${location.pathname}?event=${ROUTES.RSVP}`}>rsvp</Link></li> */}
                  <li>
                    <NavLink onClick={handleClick} to={ROUTES.ABOUT}>
                      about us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleClick} to={ROUTES.CONTACT}>
                      contact us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className={styles.header_action}>
                {/* <LinkButton className={styles.action_btn} to={`${location.pathname}?event=${ROUTES.RSVP}`} >RSVP</LinkButton> */}
                <LinkButton
                  className={styles.action_btn}
                  to={SOCIAL_LINKS.BOUTIQUE}
                  target="_blank"
                  rel="noreferrer"
                >
                  Boutique
                </LinkButton>
                {auth ? <ProfileDropdown /> : null}
                <button
                  onClick={handleClick}
                  className={`${styles.toggle} ${
                    active ? styles.active : ""
                  } d-lg-none`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
