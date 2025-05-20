import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { API, ROUTES } from "../../../../utils/constant";
import { getComputedDate, htmlToPlainText, removeTags } from "../../../../utils/utils";
import HeadingText from "../../../common/HeadingText/HeadingText";
import NoRecord from "../../../common/NoRecord/NoRecord";
import NewsCard from "../../../common/cards/NewsCard/NewsCard";
import NewsCardShimmer from "../../../common/cards/NewsCard/NewsCardShimmer/NewsCardShimmer";
import styles from "./News.module.scss";

const News = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState<{}[]>([]);
    const fetchNews = async () => {
        try {
            let response = await axios.get(API.NEWS.replace(":rows", "10").replace(":page", `${1}`));
            if (response.data && response.data.data) {
                const ar: any = [...response.data.data.rows];
                setNews((prev: any) => ([...prev, ...ar]));
            }
            setLoading(false);
        } catch (error: any) {
            toast.error(error.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchNews();
    }, [])
    return (
        <>
            <section className={styles.news}>
                <Container>
                    <HeadingText>News</HeadingText>
                    <Row className="justify-content-center">
                        {
                            loading ?
                                Array.from({ length: 3 }).map((item, index) => {
                                    return (
                                        <Col lg={4} md={6} key={String(item) + index}>
                                            <NewsCardShimmer />
                                        </Col>
                                    )
                                })
                                :
                                news.length > 0 ?
                                    news.slice(0, 3).map((item: any) => {
                                        return (
                                            <Col key={item.id} lg={4} md={6}>
                                                <NewsCard
                                                    date={getComputedDate(item.createdAt).formattedDate()}
                                                    // img={item.fimg_url}
                                                    title={htmlToPlainText(item.title)}
                                                    description={removeTags(item.content)}
                                                    to={ROUTES.VIEW_NEWS.replace(":id", item.slug)}
                                                    category={item.categoryId}
                                                    img={item.feature_image}
                                                />
                                            </Col>
                                        )
                                    })
                                    :
                                    <Col md={12}>
                                        <NoRecord title="News" />
                                    </Col>
                            // null
                        }
                    </Row>
                    {/* <LinkButton className={styles.view_btn} to={ROUTES.NEWS}>View More</LinkButton> */}
                </Container>
            </section>
        </>
    )
}

export default News
