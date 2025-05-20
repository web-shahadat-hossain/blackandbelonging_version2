import { Container } from "react-bootstrap";
import styles from "./About.module.scss";
import { useAppSelector } from "../../../../app/hooks";
import { parse } from "../../../../utils/constant";

const About = () => {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start end", "end start"],
    // });
    // const y = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
    const { banner_bottom_text, } = useAppSelector(state => state.about.about);
    return (
        <>
            <section className={styles.about}>
                {/* <Container>
                    <h3>About us</h3>
                    <HeadingText>Celebrate Yourself, Your History, and Your Way of Life with Black and Belonging.</HeadingText>
                </Container> */}
                <div className={styles.about_in}>
                    <Container>
                        <div className={styles.box}>
                            {/* <h4>“{parse(banner_top_text)}”</h4>
                            <p>{parse(banner_middle_text)}</p> */}
                            <h4>{parse(banner_bottom_text)}</h4>
                            {/* <LinkButton to={ROUTES.ABOUT}>Learn More <RightTopIcon /></LinkButton> */}
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default About
