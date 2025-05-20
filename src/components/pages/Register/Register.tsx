import axios from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { EmailIcon, UserIcon } from "../../../assets/icons/icons";
import { API, REGEX, ROUTES, TOAST_MESSAGE } from "../../../utils/constant";
import { htmlToPlainText } from "../../../utils/utils";
import Button from "../../common/Button/Button";
import Input from "../../common/Formik/Input/Input";
import Password from "../../common/Formik/Password/Password";
import GoogleLoginBtn from "../../common/GoogleLoginBtn/GoogleLoginBtn";
import styles from "../Login/Login.module.scss";
import InfoModal from "../../common/Modals/InfoModal/InfoModal";

const Register = () => {
  const [show, setShow] = useState(false);
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required")
      .matches(REGEX.EMAIL, "Invalid email"),
    firstName: Yup.string()
      .required("This field is required")
      .min(4, "First Name must be atleast 4 characters"),
    lastName: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required").min(8),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });
  const handleSubmit = async (
    values: typeof initialValues,
    formikProps: any
  ) => {
    try {
      let response = await axios.post(API.REGISTER, values, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (Number(response.data.status) === 200) {
        toast.success(TOAST_MESSAGE.REGISTRATION);
        setShow(true);
        // navigate(ROUTES.LOGIN)
      }
      formikProps.setSubmitting(false);
    } catch (error: any) {
      if (error.response.data) {
        return toast.error(htmlToPlainText(error.response.data.message));
      }
      toast.error(error.message);
      formikProps.setSubmitting(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Register | Black and Belonging</title>
      </Helmet>
      <section className={styles.banner}>
        <Container>
          <h1>Register Here</h1>
          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aperiam?</p> */}
        </Container>
      </section>
      <section className={styles.onboard}>
        <Container>
          {/* <h2>Don't have an account? Register now.</h2> */}
          <GoogleLoginBtn
            text="Sign Up with Google"
            className={styles.google_btn}
          />
          <p className={styles.or_txt}>
            <span>Or</span>
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <Row>
                  <Col sm={6}>
                    <Input
                      required
                      icon={<UserIcon />}
                      name="firstName"
                      placeholder="Enter your first name"
                      label="First Name"
                      className={`${styles.input} ${styles.first_input}`}
                    />
                  </Col>
                  <Col sm={6}>
                    <Input
                      required
                      icon={<UserIcon />}
                      name="lastName"
                      placeholder="Enter your last name"
                      className={styles.input}
                      label="Last Name"
                    />
                  </Col>
                </Row>
                <Input
                  required
                  icon={<EmailIcon />}
                  name="email"
                  type="email"
                  placeholder="Enter e-mail"
                  label="E-mail"
                />
                <Password name="password" required label="Enter Password" />
                <Password
                  name="confirmPassword"
                  required
                  label="Confirm Password"
                />
                <Button
                  type="submit"
                  fluid
                  disabled={!formik.isValid || formik.isSubmitting}
                  loading={formik.isSubmitting}
                >
                  Register
                </Button>
                <p className={styles.txt}>
                  Already have an account?&nbsp;
                  <Link to={ROUTES.LOGIN}>Login Here.</Link>
                </p>
              </Form>
            )}
          </Formik>
        </Container>
      </section>
      <InfoModal show={show} handleClose={() => setShow(!show)} />
    </>
  );
};

export default Register;
