// AuthorsSection.js
import styles from "./style/AuthorsSection.module.css";

const AuthorsSection = () => {
  const authorsData = [
    {
      name: "Dr. DeLeon Gray",
      description:
        "CEO of Black and Belonging, Associate Professor of Educational Psychology and Equity. Featured by Black Enterprise as one of 100 men of color living up to excellence standards.",
    },
    {
      name: "Dr. Joanna Ali",
      description:
        "Postdoctoral Researcher using Afrofuturistic lens to center cultural knowledge and reimagining liberating futures. Founder of Sol Space youth collaborative.",
    },
    {
      name: "Kia Allah",
      description:
        "Director of Youth Equity Programming, doctoral candidate in Educational Equity. Former Spanish teacher passionate about uplifting cultural identities.",
    },
    {
      name: "Malenia Swinton",
      description:
        "Experienced project manager and community researcher. Consultant providing results-oriented services to nonprofits and small businesses.",
    },
  ];

  return (
    <section className={styles.authorsSection}>
      <h2 className={styles.heading}>About the Authors</h2>
      <div className={styles.cardsGrid}>
        {authorsData.map((author, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.authorName}>{author.name}</h3>
            <p className={styles.authorDescription}>{author.description}</p>
            <div className={styles.linkedinQrPlaceholder}>
              LinkedIn QR
              {/* In a real application, you'd embed a QR code image here */}
              {/* <img src="/path/to/linkedin-qr-for-dr-gray.png" alt="LinkedIn QR Code" /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorsSection;
