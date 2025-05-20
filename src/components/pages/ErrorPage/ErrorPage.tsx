import { Col, Container, Row } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import { ROUTES } from "../../../utils/constant";
import styles from "./ErrorPage.module.scss";
import { RightArrow } from "../../../assets/icons/icons";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <>
      <section className={styles.error_page}>
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h3>Error 404</h3>
              <h1>{error.message}</h1>
              <p>{error.stack}</p>
              <Link to={ROUTES.HOME}>
                Go Home <RightArrow />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ErrorPage;
