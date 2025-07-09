import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar({ tableOfContents, activeSectionId, onNavLinkClick }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>The Playbook</h2>
      <div className={styles.tocCard}>
        <nav className={styles.tableOfContents}>
          <ul>
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={
                    activeSectionId === item.id ? styles.activeNavItem : ""
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    onNavLinkClick(item.id);
                  }}
                >
                  {item.title} <span>{item.page}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="https://storage.googleapis.com/blackandbelonging/videoevent/B-B-Blitz-PDF.pdf"
          className={styles.btnDownload}
          target="black"
          download
        >
          <i className="fa-solid fa-download"></i>
          Download PDF
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
