import { ReactNode, useState } from "react";
import styles from "../Input/Input.module.scss";
import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText/ErrorText";
import {
  ClosedEyeIcon,
  EyeIcon,
  LockIcon,
} from "../../../../assets/icons/icons";

type PropTypes = {
  label?: string;
  children?: ReactNode;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  hide?: boolean;
};

const Input = (props: PropTypes) => {
  const { hide } = props;
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={`${styles.input} ${props.className || ""} ${
          styles.password
        }`}
      >
        {props.label && <label htmlFor={props.name}>{props.label}</label>}
        <div className={`${styles.input_in} ${styles.icon_input}`}>
          <Field
            name={props.name}
            id={props.name}
            required={props.required}
            placeholder={props.placeholder || "••••••••••"}
            type={!show ? "password" : "text"}
          />
          <span className={styles.icon}>
            <LockIcon />
          </span>
          {!hide && (
            <button
              type="button"
              className={styles.password_icon}
              onClick={() => setShow(!show)}
            >
              {show ? <EyeIcon /> : <ClosedEyeIcon />}
            </button>
          )}
        </div>
        <ErrorMessage component={ErrorText} name={props.name} />
      </div>
    </>
  );
};

export default Input;
