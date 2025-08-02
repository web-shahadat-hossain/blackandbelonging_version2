import styles from "./style/TabContent.module.css";

const TabContent = ({ content }) => {
  if (!content) {
    return null; // Or a loading spinner, or default message
  }

  return (
    <div className={styles.tabContentContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={content.imageUrl}
          alt={content.title}
          className={styles.contentImage}
        />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.tabTitle}>{content.title}</h3>
        <h4 className={styles.tabSubTitle}>{content.subtitle}</h4>
        <p
          className={styles.tabDescription}
          dangerouslySetInnerHTML={
            { __html: content.description } as { __html: string }
          }
        />
      </div>
    </div>
  );
};

export default TabContent;
