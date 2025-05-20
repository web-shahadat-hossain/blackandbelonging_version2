import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { API, ROUTES } from "../../../../utils/constant";
import LinkButton from "../../../common/Button/LinkButton";
import HeadingText from "../../../common/HeadingText/HeadingText";
import MixtapeCard from "../../../common/cards/MixtapeCard/MixtapeCard";
import MixtapeCardShimmer from "../../../common/cards/MixtapeCard/MixtapeCardShimmer/MixtapeCardShimmer";
import styles from "./Mixtapes.module.scss";
import NoRecord from "../../../common/NoRecord/NoRecord";
import { getEnabledData } from "../../../../utils/utils";

const Mixtapes = () => {
    const [loading, setLoading] = useState(true);
    const [mixtapes, setMixtapes] = useState<any>([]);

    const fetchMixtapes = async () => {
        try {
            let response = await axios.get(API.MIXTAPES.replace(":rows", "10").replace(":page", `${1}`));
            if (response.data && response.data.data) {
                const ar: any = [...response.data.data.rows];
                setMixtapes((prev: any) => ([...prev, ...ar]));
            }
            setLoading(false);
        } catch (error: any) {
            toast.error(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMixtapes();
    }, [])
    return (
        <>
            <section className={styles.mixtapes}>
                <Container>
                    <HeadingText>Mixtapes</HeadingText>
                    <Row className="justify-content-center">
                        {
                            loading ?
                                Array.from({ length: 3 }).map((item, index) => {
                                    return (
                                        <Col
                                            lg={4}
                                            md={6}
                                            key={String(item) + index}
                                        >
                                            <MixtapeCardShimmer />
                                        </Col>
                                    )
                                })
                                :
                                getEnabledData(mixtapes).length > 0 ?
                                    getEnabledData(mixtapes).slice(0, 3).map((item: any) => (
                                        <Col
                                            key={item?.id}
                                            lg={4}
                                            md={6}
                                        >
                                            <MixtapeCard
                                                feature_image={item.feature_image}
                                                title={item.title}
                                                to={ROUTES.VIEW_MIXTAPE.replace(":id", item?.slug)}
                                                type={item.type}
                                                category={item?.category_name}
                                                date={moment(item.created_at).format('MMMM Do YYYY')}
                                            />
                                        </Col>
                                    ))
                                    :
                                    <Col md={12}>
                                        <NoRecord title="Mixtapes" />
                                    </Col>
                        }
                    </Row>
                    <LinkButton className={styles.view_btn} to={ROUTES.MIXTAPES}>View More</LinkButton>
                </Container>
            </section>
        </>
    )
}

export default Mixtapes
