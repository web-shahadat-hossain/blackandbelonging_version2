import { useState, useEffect } from "react";

import styles from "./PlaybookSection.module.css"; // For global layout styles
import { sectionsData, tableOfContents } from "./contentData";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";

function PlayBookBooks() {
  const [activeSectionId, setActiveSectionId] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sectionsData[hash]) {
        setActiveSectionId(hash);
      } else {
        // Default to the first section if no hash or invalid hash
        const firstSectionId = Object.keys(sectionsData)[0];
        setActiveSectionId(firstSectionId);
        window.history.replaceState(null, null, `#${firstSectionId}`);
      }
    };

    handleHashChange(); // Call once on mount
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavLinkClick = (id) => {
    window.history.pushState(null, null, `#${id}`);
    setActiveSectionId(id);
  };

  return (
    <div className={styles.app}>
      {/* <HeroSection /> */}
      <main className={styles.mainContent}>
        <div className={styles.container + " " + styles.playbookSection}>
          <Sidebar
            tableOfContents={tableOfContents}
            activeSectionId={activeSectionId}
            onNavLinkClick={handleNavLinkClick}
          />
          <ContentArea
            sectionsData={sectionsData}
            activeSectionId={activeSectionId}
          />
        </div>
      </main>
    </div>
  );
}

export default PlayBookBooks;
