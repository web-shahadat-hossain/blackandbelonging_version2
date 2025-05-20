import { Form, Formik } from "formik";
import Modal from "../Modal/Modal";
// import styles from "./ForgotPassword.module.scss";
import Input from "../../Formik/Input/Input";
import Button from "../../Button/Button";
import * as Yup from "yup";
import { API, REGEX } from "../../../../utils/constant";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setLoading } from "../../../../features/loading/loading.slice";
import Loader from "../../Loader/Loader";
import axios from "axios";
import { useState } from "react";
import ChangePassword from "../ChangePassword/ChangePassword";
import InfoModal from "../InfoModal/InfoModal";

interface propTypes {
  show?: boolean;
  handleClose?: () => void;
}

const ForgotPassword = (props: propTypes) => {
  const { loading } = useAppSelector((state) => state.loading);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const [showChange, setShowChange] = useState(false);

  const dispatch = useAppDispatch();
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required")
      .matches(REGEX.EMAIL, "Invalid email"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    dispatch(setLoading(true));
    const payload = {
      ...values,
      type: "ForgotPassword",
    };
    try {
      let response = await axios.post(API.FORGOT_PASSWORD, payload);
      if (response.status === 200) {
        toast.success(response.data.message, {
          duration: 4000,
        });
        // navigate(ROUTES.LOGIN);
        setShow(true);
        setEmail(values.email);
        props.handleClose && props.handleClose();
      }
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      if (error.response) {
        if (error.response.data) {
          return toast.error(error.response.data.message);
        }
      }
      toast.error(error.message);
    }
  };
  return (
    <>
      {loading ? <Loader /> : null}
      <Modal
        show={props.show}
        handleClose={props.handleClose}
        title={"Forgot Password"}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Input
              type="email"
              name="email"
              // label="Email"
              placeholder="Enter your email to reset password"
            />
            <Button fluid className="mt-4" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </Modal>
      <InfoModal show={show} handleClose={() => setShow(!show)} />
      {/* <OTPModal
                show={show}
                handleClose={() =>setShow("")}
                setShowChange={setShowChange}
            type="ForgotPassword"
            /> */}
      <ChangePassword
        show={showChange}
        email={email}
        handleClose={() => setShowChange(false)}
      />
    </>
  );
};

export default ForgotPassword;
