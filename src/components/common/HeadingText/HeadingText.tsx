import { ReactNode } from "react";
import styles from "./HeadingText.module.scss";

type propTypes = {
  title?: string;
  className?: string;
  children?: ReactNode;
};

const HeadingText = (props: propTypes) => {
  return (
    <>
      <h2 className={`${styles.heading} ${props.className || ""}`}>
        {props.title || props.children}
      </h2>
    </>
  );
};

export default HeadingText;
