import { Container } from "react-bootstrap";
import styles from "./Banner.module.scss";
import { ReactNode } from "react";

type propTypes = {
    title?: ReactNode,
    className?: string,
}

const Banner = (props: propTypes) => {
    return (
        <>
            <section className={`${styles.banner} ${props.className || ''}`}>
                <Container>
                    <div className={styles.banner_in}>
                        <h1>
                            {props.title}
                        </h1>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner
