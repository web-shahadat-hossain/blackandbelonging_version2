import { Form, Formik } from "formik";
import { useState, lazy, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import {
  AwardsIcon,
  SchoolIcon,
  UserIcon,
} from "../../../../assets/icons/icons";
import Button from "../../Button/Button";
import Input from "../../Formik/Input/Input";
import Textarea from "../../Formik/Textarea/Textarea";
import Modal from "../Modal/Modal";
import styles from "./RsvpModal.module.scss";
import axios from "axios";
import { API, REGEX, SOCIAL_LINKS } from "../../../../utils/constant";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import success from "../../../../assets/animations/success.json";

// ✅ Lottie Component সরাসরি এখানে define & lazy-load wrapper
const LottieAnimation = ({
  animationData,
  className,
}: {
  animationData: any;
  className?: string;
}) => {
  const Lottie = require("lottie-react").default;
  return (
    <Lottie className={className} animationData={animationData} loop={false} />
  );
};

// ✅ Lazy load wrapper
const LazyLottieAnimation = lazy(() =>
  Promise.resolve({ default: LottieAnimation })
);

interface propTypes {
  show?: boolean;
  handleClose?: () => void;
}

const RsvpModal = (props: propTypes) => {
  const [loading, setLoading] = useState(false);
  const steps = [
    { label: 1, key: 1, icon: UserIcon },
    { label: 2, key: 2, icon: SchoolIcon },
    { label: 3, icon: AwardsIcon, key: 3 },
  ];
  const validationSchema = Yup.object({
    fName: Yup.string().required("Required").label("First Name").min(3),
    lName: Yup.string().required("Required").label("Last Name").min(3),
    phone: Yup.string()
      .required("Required")
      .label("Phone")
      .matches(REGEX.PHONE, "Invalid Phone number"),
    email: Yup.string()
      .required("Required")
      .label("Email")
      .matches(REGEX.EMAIL, "Invalid Email"),
  });
  const initialValues = {
    fName: "",
    lName: "",
    phone: "",
    email: "",
    organization: "",
    comments: "",
    guestsNumber: "",
  };
  const [step, setStep] = useState(steps[0]);

  const handleSubmit = async (values: typeof initialValues) => {
    if (step.key === 1) {
      setStep(steps[1]);
    } else if (step.key === 2) {
      setLoading(true);
      try {
        await axios.post(API.RSVP.ADD_PARTICIPANT, {
          firstname: values.fName,
          lastname: values.lName,
          email: values.email,
          phone: values.phone,
          school_organization: values.organization,
          notes: values.comments,
          totalGuests: values.guestsNumber,
        });
        setLoading(false);
      } catch (error: any) {
        toast.error(error.message);
        setLoading(false);
      }
      setStep(steps[2]);
    }
  };

  return (
    <Modal
      show={props.show}
      handleClose={props.handleClose}
      title="RSVP"
      className={styles.rsvp}
    >
      <div className={styles.steps}>
        <ul>
          {steps.map((item, index) => (
            <li
              key={item.key}
              className={
                index + 1 < step.key
                  ? styles.done
                  : JSON.stringify(item) === JSON.stringify(step)
                  ? styles.active
                  : ""
              }
            >
              <button
                className={
                  index + 1 < step.key
                    ? styles.done
                    : JSON.stringify(item) === JSON.stringify(step)
                    ? styles.active
                    : ""
                }
              >
                <item.icon />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.steps_content}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {step.key === 1 && (
              <Row>
                <Col md={6}>
                  <Input
                    required
                    name="fName"
                    label="First Name"
                    placeholder="Enter Your First Name"
                  />
                </Col>
                <Col md={6}>
                  <Input
                    required
                    name="lName"
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                  />
                </Col>
                <Col md={6}>
                  <Input
                    required
                    name="phone"
                    type="number"
                    label="Phone"
                    placeholder="Enter Your Phone"
                  />
                </Col>
                <Col md={6}>
                  <Input
                    required
                    name="email"
                    label="Email"
                    placeholder="Enter Your Email Address"
                    type="email"
                  />
                </Col>
                <Col md={12}>
                  <Button fluid type="submit" loading={loading}>
                    Next
                  </Button>
                </Col>
              </Row>
            )}

            {step.key === 2 && (
              <Row>
                <Col md={12}>
                  <Textarea
                    required
                    name="organization"
                    label="School/Organization"
                    placeholder="Enter Your School/Organization"
                  />
                </Col>
                <Col md={12}>
                  <Textarea
                    required
                    name="comments"
                    label="Notes/Comments"
                    placeholder="Enter Notes/Comments"
                  />
                </Col>
                <Col md={12}>
                  <Button fluid type="submit" loading={loading}>
                    Submit
                  </Button>
                </Col>
              </Row>
            )}

            {step.key === 3 && (
              <div className={styles.success}>
                <Suspense fallback={<div>Loading animation...</div>}>
                  <LazyLottieAnimation
                    className={styles.animation}
                    animationData={success}
                  />
                </Suspense>
                <h3>RSPV Submitted Successfully</h3>
                <p>
                  Thanks for confirming your attendance! Your presence will make
                  the event even more special. If you have any more questions or
                  need assistance, feel free to ask.{" "}
                  <Link
                    to={`mailto:${SOCIAL_LINKS.SUPPORT_EMAIL}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {SOCIAL_LINKS.SUPPORT_EMAIL}
                  </Link>
                </p>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default RsvpModal;
