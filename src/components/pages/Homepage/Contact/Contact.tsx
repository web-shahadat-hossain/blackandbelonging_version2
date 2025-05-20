import { Container } from "react-bootstrap";
import { useAppSelector } from "../../../../app/hooks";
import LinkButton from "../../../common/Button/LinkButton";
import styles from "./Contact.module.scss";
import { parse } from "../../../../utils/constant";

const Contact = () => {
    const { last_section_title, last_section_button_link, last_section_button_text, last_section_description } = useAppSelector(state => state.homepage.homepage);
    return (
        <>
            <section className={styles.contact}>
                <Container>
                    <div className={styles.contact_in}>
                        <div className={styles.box}>
                            <h2>{parse(last_section_title)}</h2>
                            <p>
                                {parse(last_section_description)}
                            </p>
                            <LinkButton to={last_section_button_link}>{parse(last_section_button_text)}</LinkButton>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact
