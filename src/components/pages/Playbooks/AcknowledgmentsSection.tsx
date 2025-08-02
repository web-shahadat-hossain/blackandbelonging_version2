import styles from "./style/AcknowledgmentsSection.module.css";
import img from "../../../assets/images/playbookAcknowledgmentsSection.png";
// Assuming the image `image_05d956.jpg` is in your public folder
// If it's in src/assets, import it:
// import acknowledgmentsImage from '../assets/image_05d956.jpg';

const AcknowledgmentsSection = () => {
  return (
    <section className={styles.acknowledgmentsSection}>
      <div className={styles.imageBlock}>
        <img
          src={img}
          alt="B&B Blitz youth leaders"
          className={styles.mainImage}
        />
      </div>

      <div className={styles.textBlock}>
        <h2 className={styles.subHeading}>ACKNOWLEDGMENTS</h2>
        <p className={styles.paragraph}>
          We Want To Give A Heartfelt Shout-Out To The Student Experience
          Research Network (SERN) And Mackenzie Scott For Supporting Our Efforts
          To Bring This Resource To Life And Ensure Its Widespread Reach. This
          Support Has Provided Young People With The Protected Thinking Time
          Needed To Reflect On The Principles And Practices Underlying Their
          Successful Youth-Led Initiatives. Our Supporters Have Demonstrated A
          Steadfast Commitment To Connect Students, Community Organizations,
          Leaders, Scholars, And Educators In Order To Build Bridges Across
          Isolated Systems And Stakeholders. Please Note That This Practical
          Resource Is Designed To Elevate The Perspectives Of Our Youth
          Collaborators (As Well As Our Own Learnings From Supporting Youth-Led
          Initiatives). Therefore, These Views May Not Necessarily Represent The
          Position Of The Various Organizations And Supporters That We Are
          Affiliated With.
        </p>

        <h3 className={styles.citationHeading}>HOW TO CITE THIS PLAYBOOK</h3>
        <p className={styles.citationText}>
          Gray, D. L., Ali, J., Allah, K., & Swinton, M. (2024). B&B Blitz:
          Using Practical Belonging Insights to Structure Youth-Led Initiatives
          in Schools And Communities. Durham, NC: Black And Belonging.
        </p>

        <button className={styles.button}>Launch Playbook</button>
      </div>
    </section>
  );
};

export default AcknowledgmentsSection;
