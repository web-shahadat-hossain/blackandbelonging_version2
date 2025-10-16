import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../common/Banner/Banner";
import styles from "./Settings.module.scss";
import { useAppSelector } from "../../../app/hooks";
import { Form, Formik } from "formik";
import Input from "../../common/Formik/Input/Input";
import { getComputedDate } from "../../../utils/utils";
import { Helmet } from "react-helmet";

const Settings = () => {
  const { userDetails } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  // 🔹 Redirect if user is AUTHOR and status is ACTIVE
  useEffect(() => {
    if (userDetails.userType === "AUTHOR" && userDetails.status === "ACTIVE") {
      navigate("/author");
    }
  }, [userDetails, navigate]);

  const initialValues = {
    username: userDetails.username,
    displayName: userDetails.displayName,
    email: userDetails.email,
    first_name: userDetails.first_name,
    registeredDate: getComputedDate(
      userDetails.registeredDate || ""
    ).formattedDate(),
    userId: userDetails.userId,
    role: userDetails.role,
  };

  return (
    <>
      <Helmet>
        <title>Settings | Black and Belonging</title>
      </Helmet>
      <section className={styles.settings}>
        <Banner title="Settings" />
        <Container>
          <p
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "40px",
              fontSize: "25px",
            }}
          >
            {userDetails.status === "PENDING"
              ? "Your account is under review. Please wait for approval."
              : userDetails.status === "REJECTED"
              ? "Your account request has been rejected. Please contact support for details."
              : ""}
          </p>

          <Formik initialValues={initialValues} onSubmit={() => {}}>
            <Form className={styles.form}>
              <Row>
                <Col md={6}>
                  <Input disabled name={"first_name"} label="First name" />
                </Col>
                <Col md={6}>
                  <Input disabled name={"displayName"} label="Display Name" />
                </Col>
                <Col md={6}>
                  <Input disabled name={"username"} label="Username" />
                </Col>
                <Col md={6}>
                  <Input disabled name={"email"} label="Email" type="email" />
                </Col>
              </Row>
            </Form>
          </Formik>
        </Container>
      </section>
    </>
  );
};

export default Settings;
