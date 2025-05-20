import axios from "axios";
import { Form, Formik, FormikValues } from "formik";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { UserIcon } from "../../../assets/icons/icons";
import { setAuth, setUser } from "../../../features/user/user.slice";
import { API, ROUTES, TOAST_MESSAGE } from "../../../utils/constant";
import { htmlToPlainText } from "../../../utils/utils";
import Button from "../../common/Button/Button";
import Input from "../../common/Formik/Input/Input";
import Password from "../../common/Formik/Password/Password";
import styles from "./Login.module.scss";
import GoogleLoginBtn from "../../common/GoogleLoginBtn/GoogleLoginBtn";
import { useState } from "react";
import ForgotPassword from "../../common/Modals/ForgotPassword/ForgotPassword";

const Login = () => {
  const [show, setShow] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state && location.state.from.pathname) || ROUTES.HOME;

  const handleSubmit = async (values: FormikValues, formikProps: any) => {
    try {
      let response = await axios.post(API.LOGIN, values, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (Number(response.status) === 200) {
        let token = response.data.data.token;
        let profileResponse = await axios.get(API.GET_PROFILE, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let data = profileResponse.data.data;
        navigate(from, { replace: true });
        dispatch(
          setUser({
            first_name: data.firstName,
            username: data.email,
            displayName: data.firstName,
            userImg: "",
            email: data.email,
            // registeredDate: data.user_registered,
            userId: data.id,
            // role: response.data.roles[0],
            status: data.status,
          })
        );
        dispatch(setAuth(true));
        toast.success(TOAST_MESSAGE.LOGGED_IN);
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
        <title>Login | Black and Belonging</title>
      </Helmet>
      <section className={styles.banner}>
        <Container>
          <h1>Log In Here</h1>
        </Container>
      </section>
      <section className={styles.onboard}>
        <Container>
          {/* <h2>Login to your Account</h2> */}
          <h2>Please choose from the sign in options below.</h2>
          <GoogleLoginBtn className={styles.google_btn} isLogin={true} />
          <p className={styles.or_txt}>
            <span>Or</span>
          </p>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(formik) => (
              <Form>
                <Input
                  required
                  icon={<UserIcon />}
                  name="email"
                  type="email"
                  placeholder="Enter Email or Username"
                  label="Enter Email or Username"
                />
                <Password name="password" required label="Enter Password" />
                <button
                  type="button"
                  onClick={() => setShow(true)}
                  className={styles.forgot_password}
                >
                  Forgot Password?
                </button>
                <Button
                  type="submit"
                  fluid
                  disabled={!formik.isValid || formik.isSubmitting}
                  loading={formik.isSubmitting}
                >
                  Login
                </Button>
                <p className={styles.txt}>
                  By signing in, you agree to our &nbsp;
                  <Link to={ROUTES.TERMS_OF_USE}>Terms of Use.</Link>
                </p>
                <p className={styles.txt}>
                  New to Black and Belonging?&nbsp;
                  <Link to={ROUTES.REGISTER}>Create an account.</Link>
                </p>
              </Form>
            )}
          </Formik>
        </Container>
      </section>
      <ForgotPassword show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default Login;
