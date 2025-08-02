import styles from "./style/Hero.module.css";
import heroImage from "../../../assets/images/playbookhero.png";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src={heroImage} // Use the provided image URL directly
        alt="Group of happy students"
        className={styles.backgroundImage}
      />
      <div className={styles.contentWrapper}>
        <p className={styles.logo}>B&B Blitz</p>
        <div>
          <h1 className={styles.title}>Empowering Youth Through Belonging</h1>
          <p className={styles.description}>
            Using Practical Belonging Insights to Drive Student-Led Change in
            Schools and Communities
          </p>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
