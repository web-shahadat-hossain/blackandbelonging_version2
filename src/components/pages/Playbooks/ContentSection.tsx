import React from "react";
import styles from "./ContentSection.module.css";

function ContentSection({ id, title, pageNumber, content, isActive }) {
  return (
    <section id={id}>
      {/* {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {pageNumber && <p className={styles.pageNumber}>Page {pageNumber}</p>}
      <div dangerouslySetInnerHTML={{ __html: content }} />{" "} */}
      <img src="https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752073381/B_B-Blitz-PDF_1__page-0001_y2dwyk.jpg" />
      {/* Render HTML content */}
    </section>
  );
}

export default ContentSection;
