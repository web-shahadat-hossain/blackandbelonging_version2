import styles from "./ErrorText.module.scss";

const ErrorText = ({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) => {
  return (
    <>
      <p className={`${styles.error} ${className || ""}`}>{children}</p>
    </>
  );
};

export default ErrorText;
