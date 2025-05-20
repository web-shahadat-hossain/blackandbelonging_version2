import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../../../app/hooks";
import { InvitedPeople, ResearchIcon, TeachersIcon, WorkshopsIcon } from "../../../../assets/icons/icons";
import Shimmer from "../../../common/Shimmer/Shimmer";
import styles from "./Achievements.module.scss";
import { parse } from "../../../../utils/constant";

const Achievements = () => {
    const { section_two_box_1_count, section_two_box_1_text, section_two_box_2_count, section_two_box_2_text, section_two_box_3_count, section_two_box_3_text, section_two_box_4_count, section_two_box_4_text } = useAppSelector(state => state.homepage.homepage);
    const { loading } = useAppSelector(state => state.loading);
    const achievements = [
        //     {
        //         title: "National Awards",
        //         count: 5,
        //         icon: <AwardsIcon />,
        //     },
        {
            title: parse(section_two_box_1_text),
            count: parse(section_two_box_1_count),
            icon: <ResearchIcon />,
        },
        {
            title: parse(section_two_box_2_text),
            count: parse(section_two_box_2_count),
            icon: <InvitedPeople />,
        },
        {
            title: parse(section_two_box_3_text),
            count: parse(section_two_box_3_count),
            icon: <TeachersIcon />,
        },
        {
            title: parse(section_two_box_4_text),
            count: parse(section_two_box_4_count),
            icon: <WorkshopsIcon />,
        }
    ];
    return (
        <>
            <section className={styles.achievements}>
                <Container>
                    {/* <HeadingText>Our Achiements</HeadingText> */}
                    <Row>
                        {
                            loading ?
                                Array.from({ length: 4 }).map((item, index) => {
                                    return (
                                        <Col md={3} key={String(item) + index}>
                                            <div className={styles.shimmer_box}>
                                                <Shimmer className={styles.shimmer_icon} />
                                                <Shimmer className={styles.shimmer_count} />
                                                <Shimmer className={styles.shimmer_title} />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                achievements.map((item, index) => (
                                    <Col key={index} md={3}>
                                        <div className={styles.achievement}>
                                            <div className={styles.icon}>
                                                {item.icon}
                                            </div>
                                            <div className={styles.bg_icon}>
                                                {item.icon}
                                            </div>
                                            <h3>{item.count}</h3>
                                            <h4>{item.title}</h4>
                                        </div>
                                    </Col>
                                ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Achievements
