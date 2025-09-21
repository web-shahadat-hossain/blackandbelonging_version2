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
import styles from "../Login/Login.module.scss";
import InfoModal from "../../common/Modals/InfoModal/InfoModal";

const AuthorRequests = () => {
  const [show, setShow] = useState(false);

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    userType: "AUTHOR",
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
    userType: Yup.mixed<"USER" | "AUTHOR">().oneOf(
      ["USER", "AUTHOR"],
      "Invalid user type"
    ),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    formikProps: any
  ) => {
    values.userType = "AUTHOR";
    try {
      let response = await axios.post(API.REGISTER, values, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (Number(response.data.status) === 200) {
        toast.success(TOAST_MESSAGE.REGISTRATION);
        setShow(true);
      }
      formikProps.setSubmitting(false);
    } catch (error: any) {
      if (error.response?.data) {
        return toast.error(htmlToPlainText(error.response.data.message));
      }
      toast.error(error.message);
      formikProps.setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Author Requests | Black and Belonging</title>
      </Helmet>
      <section className={styles.banner}>
        <Container>
          <h1>Author Requests Here</h1>
        </Container>
      </section>
      <section className={styles.onboard}>
        <Container>
          {/* <GoogleLoginBtn
            text="Sign Up with Google"
            className={styles.google_btn}
          />
          <p className={styles.or_txt}>
            <span>Or</span>
          </p> */}
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

                {/* User Type with Inline Styles */}
                <div className="mb-3">
                  <label
                    className="form-label"
                    style={{
                      color: "#9aa1b2",
                      fontWeight: 600,
                      marginBottom: "6px",
                      display: "block",
                    }}
                  >
                    User Type
                  </label>
                  <select
                    name="userType"
                    value={formik.values.userType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: "#171923",
                      color: "#e6e7eb",
                      fontSize: "14px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <option value="AUTHOR">AUTHOR</option>
                  </select>
                  {formik.touched.userType && formik.errors.userType && (
                    <div
                      style={{
                        color: "#ff4d4f",
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      {formik.errors.userType as string}
                    </div>
                  )}
                </div>

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

export default AuthorRequests;
