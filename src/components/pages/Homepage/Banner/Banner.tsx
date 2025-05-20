import { Container } from "react-bootstrap";
import styles from "./Banner.module.scss";
import { useAppSelector } from "../../../../app/hooks";
import { parse } from "../../../../utils/constant";

const Banner = () => {
    const { banner_title, banner_description } = useAppSelector(state => state.homepage.homepage);
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <div className={styles.banner_in}>
                        <h1>
                            {/* Black and Belonging */}
                            {parse(banner_title)}
                        </h1>
                        <p>
                            {/* We help structure learning environments where students feel accepted, respected, included and supported. */}
                            {parse(banner_description)}
                        </p>
                        {/* <LinkButton className={styles.action_btn} to={ROUTES.EVENTS}>Explore Events</LinkButton> */}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner
