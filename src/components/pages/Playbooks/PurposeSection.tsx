// PurposeSection.js
import styles from "./style/PurposeSection.module.css";

// You would typically import actual SVG components or use a library for icons
// For demonstration, I'm using a generic placeholder.
// If you have specific SVG files, you can import them:
// import { ReactComponent as ConveneIcon } from '../assets/icons/convene.svg';
// etc.

const PurposeSection = () => {
  const cardsData = [
    {
      id: 1,
      title: "Convene",
      description: "School policy convenings with administrators.",
      icon: <i className="fas fa-user-graduate"></i>, // Example if you imported an SVG component
    },
    {
      id: 2,
      title: "Discover",
      description: "Research studies about students’ in-school experiences.",
      icon: <i className="fas fa-lightbulb"></i>,
    },
    {
      id: 3,
      title: "Express",
      description:
        "Fashion shows featuring clothing items that youth designed to serve as conversation pieces regarding issues that are on young peoples’ minds and hearts.",
      icon: <i className="fas fa-palette"></i>,
    },
    {
      id: 4,
      title: "Celebrate",
      description:
        "Cultural events that honored and affirmed youth from various ethnic backgrounds",
      icon: <i className="fas fa-globe-americas"></i>,
    },
    {
      id: 5,
      title: "Amplify",
      description:
        "Research presentations at school staff meetings and national conferences",
      icon: <i className="fas fa-bullhorn"></i>,
    },
  ];

  return (
    <section className={styles.purposeSection}>
      <h2 className={styles.heading}>PURPOSE</h2>
      <p className={styles.description}>
        This Playbook Synthesizes Ideas That Emerged From Visioning Sessions
        With Youth We Were Supporting As They Implemented Youth-Led Initiatives
        In Their Schools And Communities
      </p>

      <div className={styles.cardsGrid}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardIconContainer}>{card.icon}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurposeSection;
