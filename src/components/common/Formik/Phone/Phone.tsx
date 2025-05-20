import ErrorText from "../ErrorText/ErrorText";
import styles from "./Phone.module.scss";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";

const Phone = ({
  className,
  error,
  label,
  ...rest
}: PhoneInputProps & {
  label?: string;
  error?: string;
  className?: string;
}) => {
  return (
    <div className={`${styles.input} ${className || ""}`}>
      {label && <label>{label}</label>}
      <PhoneInput {...rest} />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

export default Phone;
