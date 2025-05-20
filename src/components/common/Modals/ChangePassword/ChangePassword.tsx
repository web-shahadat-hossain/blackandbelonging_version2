import { Form, Formik } from "formik";
import Modal from "../Modal/Modal";
import Button from "../../Button/Button";
import * as Yup from "yup";
import { API, ROUTES } from "../../../../utils/constant";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setLoading } from "../../../../features/loading/loading.slice";
import Loader from "../../Loader/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Password from "../../Formik/Password/Password";
import { Container } from "react-bootstrap";

interface propTypes {
  show?: boolean;
  email: string;
  handleClose?: () => void;
}

const ChangePassword = (props: propTypes) => {
  const { email } = props;
  const { loading } = useAppSelector((state) => state.loading);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("This field is required").min(8),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    dispatch(setLoading(true));
    const payload = {
      email: email,
      password: values.password,
    };
    try {
      let response = await axios.patch(API.UPDATE_PASSWORD, payload);
      console.log("resp", response);
      if (response.status === 200) {
        toast.success(response.data.message, {
          duration: 4000,
        });
        navigate(ROUTES.LOGIN);
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
        title={"Change Password"}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Container>
            <Form>
              <Password name="password" required hide label="Enter Password" />
              <Password
                name="confirmPassword"
                required
                hide
                label="Confirm Password"
              />
              <Button fluid className="mt-4" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Formik>
      </Modal>
    </>
  );
};

export default ChangePassword;
