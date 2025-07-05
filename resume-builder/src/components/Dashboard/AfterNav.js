import React from "react";
import styles from "./AfterNav.module.css";
import { CgProfile } from "react-icons/cg";

const AfterNav = () => {
  return (
    <header className={styles.header}>
    
      <div className={styles.brandName}>Resume Builder</div>

      <nav>
        <ul className={styles.navLinks} type="none">
          <li>
            <button className={`${styles.navButton} ${styles.homeBtn}`}>Home</button>
          </li>
          <li>
            <button className={`${styles.navButton} ${styles.myDocumentBtn}`}>My Documents</button>
          </li>
          <li>
            <CgProfile size="2.2rem" className={styles.profileIcon}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AfterNav;