import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { API, ROUTES } from "../../../../utils/constant";
import Button from "../../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./OTPModal.module.scss";

type propTypes = {
  show?: string;
  handleClose?: () => void;
  type?: string;
  setShowChange?: React.Dispatch<React.SetStateAction<boolean>>;
  navigateToLogin?: boolean;
};

const OTPModal = (props: propTypes) => {
  const { setShowChange, navigateToLogin } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(API.VERFIY_EMAIL, {
        type: props.type,
        email: props.show,
        otp,
      })
      .then((response) => {
        toast.success(response.data.message);
        setShowChange && setShowChange(true);
        props.handleClose();
        setTimeout(() => {
          navigateToLogin && navigate(ROUTES.LOGIN);
        }, 200);

        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        if (error.response.data && error.response.data.message) {
          return toast.error(error.response.data.message);
        }
        return toast.error(error.message);
      })
      .finally(() => {
        navigateToLogin && ROUTES.LOGIN;
      });
  };
  return (
    <Modal
      show={Boolean(props.show)}
      handleClose={props.handleClose}
      title="OTP Verification"
      className={styles.otp_modal}
      backdrop={"static"}
    >
      <p>
        Enter the OTP you received to
        <br />
        <a
          href={`https://mail.google.com/mail/u/#inbox`}
          target="_blank"
          rel="noreferrer"
        >
          {props.show}
        </a>
      </p>
      <div className={styles.otp}>
        <OtpInput
          value={otp}
          shouldAutoFocus
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <Button
        loading={loading}
        onClick={handleSubmit}
        disabled={otp.length !== 6}
        fluid
      >
        Submit
      </Button>
    </Modal>
  );
};

export default OTPModal;
