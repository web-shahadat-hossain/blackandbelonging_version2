import { ReactNode } from "react";
import styles from "./Input.module.scss";
import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText/ErrorText";

type PropTypes = {
  label?: string;
  children?: ReactNode;
  icon?: ReactNode;
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
};

const Input = (props: PropTypes) => {
  return (
    <>
      <div className={`${styles.input} ${props.className || ""}`}>
        {props.label && <label htmlFor={props.name}>{props.label}</label>}
        <div
          className={`${styles.input_in} ${
            props.icon ? styles.icon_input : ""
          }`}
        >
          <Field
            name={props.name}
            id={props.name}
            required={props.required}
            placeholder={props.placeholder}
            disabled={props.disabled}
            type={props.type || "text"}
          />
          {props.icon && <span className={styles.icon}>{props.icon}</span>}
        </div>
        <ErrorMessage component={ErrorText} name={props.name} />
      </div>
    </>
  );
};

export default Input;
