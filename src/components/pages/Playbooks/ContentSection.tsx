// ContentSection.js
import styles from "./style/ContentSection.module.css"; // Import CSS Module

const ContentSection = () => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.contentWrapper}>
        {/* The decorative borders are added via pseudo-elements in CSS */}
        <div className={styles.textBlock}>
          <p>
            Adolescents’ sense of well-being, achievement beliefs, and academic
            performance are linked to their belonging experiences in
            institutional settings—making belonging a developmental priority and
            psychological necessity for youth. The Opportunities to Belong
            framework, proposed by Gray and colleagues (2018), offers educators
            tools that can enable them to cultivate institutional opportunities
            to belong by providing youth time and space to address barriers and
            inequitable institutional conditions that ultimately devalue and
            restrict the leadership contributions of marginalized youth.
            Although some youth-serving institutions recognize that youth
            experiences should inform decision-making on institutional policies,
            there are few detailed examples and powerful illustrations of how
            such opportunities can be structured that are well documented in
            publicly accessible outlets.
          </p>
          <p>
            Our hope is that this playbook will be helpful for decision-makers
            in youth-serving institutions to: (1) crystallize a working
            understanding of institutional opportunities to belong that can be
            applied to future policy and practice work; (2) integrate youths’
            subject-matter expertise and information resources into ongoing
            decision-making about educational policies and practices; (3)
            challenge existing assumptions about substantive youth engagement in
            leadership roles; and (4) identify liberating practices and
            approaches that can become cornerstones for future youth-led
            initiatives. We present a set of plays as a starting point for
            developing your own plays and effective practices that work in your
            community.
          </p>
        </div>
        <button className={styles.button}>Learn More</button>
      </div>
    </section>
  );
};

export default ContentSection;
