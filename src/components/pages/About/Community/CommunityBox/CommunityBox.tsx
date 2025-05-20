import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import styles from "./CommunityBox.module.scss";

type propTypes = {
  title?: ReactNode;
  index?: number;
  text?: ReactNode;
  className?: string;
  img?: string;
};

const CommunityBox = (props: propTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const isInView = useInView(ref);

  const variants = {
    initial: {
      filter: "blur(1rem)",
      opacity: 0,
      y: 100,
    },
    final: {
      filter: "blur(0rem)",
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div ref={ref} className={`${styles.box} ${props.className || ""}`}>
        <div className={styles.box_left}>
          <motion.h4 style={{ y }}>
            {props.index && props.index < 9 && "0"}
            {props.index}
          </motion.h4>
          <motion.h3
            animate={isInView ? "final" : ""}
            initial="initial"
            variants={variants}
            transition={{
              duration: 0.7,
            }}
          >
            {props.title}
          </motion.h3>
          <p>{props.text}</p>
        </div>
        <div className={styles.box_right}>
          <img src={props.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default CommunityBox;
