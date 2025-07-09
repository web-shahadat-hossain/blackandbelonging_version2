import React from "react";
import styles from "./ContentArea.module.css";
import ContentSection from "./ContentSection";

function ContentArea({ sectionsData, activeSectionId }) {
  return (
    <article className={styles.contentArea}>
      {Object.keys(sectionsData).map((id) => (
        <ContentSection
          key={id}
          id={id}
          title={sectionsData[id].title}
          pageNumber={sectionsData[id].pageNumber}
          content={sectionsData[id].content}
          isActive={activeSectionId === id}
        />
      ))}
    </article>
  );
}

export default ContentArea;
