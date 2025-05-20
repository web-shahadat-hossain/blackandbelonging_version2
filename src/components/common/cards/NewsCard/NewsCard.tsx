import { Link } from "react-router-dom";
import styles from "./NewsCard.module.scss";
import LinkButton from "../../Button/LinkButton";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { API } from "../../../../utils/constant";

type PropTypes = {
  date?: string;
  img?: string;
  title?: string;
  type?: string;
  className?: string;
  category?: string;
  to?: string;
  author?: string;
  description?: string;
};

const NewsCard = (props: PropTypes) => {
  const [category, setCategory] = useState("");
  const getCategory = useMemo(() => {
    return async () => {
      try {
        let response = await axios.get(
          API.GET_NEWS_CATEGORY.replace(":id", props.category || "")
        );
        if (response.data && response.data.data) {
          setCategory(response.data.data.name);
        }
      } catch (error) {}
    };
  }, []);
  useEffect(() => {
    getCategory();
  }, [props.category]);
  return (
    <>
      <div className={`${styles.card} ${props.className || ""}`}>
        <div className={styles.card_img}>
          <img src={props.img} alt={props.title} />
          {category && <span className={styles.category}>{category}</span>}
        </div>
        <Link className={styles.title} to={props.to || ""} title={props.title}>
          {props.title}
        </Link>
        <h4 className={styles.date}>{props.date}</h4>
        {props.description && (
          <p className={styles.desc}>
            {parse(props.description.slice(0, 150))}
            {props.description.length > 150 && "..."}
          </p>
        )}
        <LinkButton className={styles.read_btn} to={props.to}>
          Read More
        </LinkButton>
      </div>
    </>
  );
};

export default NewsCard;
