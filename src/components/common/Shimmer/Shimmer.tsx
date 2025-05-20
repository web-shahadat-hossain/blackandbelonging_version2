import styles from "./Shimmer.module.scss";

type propTypes = {
  className?: string;
  width?: number | string;
  height?: number | string;
  fluid?: boolean;
  verticalFluid?: boolean;
};

const Shimmer = (props: propTypes) => {
  return (
    <>
      <span
        className={`${styles.shimmer} ${props.className || ""}`}
        style={{
          width: props.fluid
            ? "100%"
            : typeof props.width === "number"
            ? `${props.width}px`
            : props.width,
          height: props.verticalFluid
            ? "100%"
            : typeof props.height === "number"
            ? `${props.height}px`
            : props.height,
        }}
      />
    </>
  );
};

export default Shimmer;
