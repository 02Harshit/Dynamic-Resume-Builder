import React from "react";
import styles from "./AfterNav.module.css";

const AfterNav = () => {
  return (
    <header className={styles.header}>
      {/* LHS - Brand Name */}
      <div className={styles.brandName}>Resume Builder</div>

      {/* RHS - Navbar Links */}
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <button className={styles.navButton}>Home</button>
          </li>
          <li>
            <button className={styles.navButton}>My Documents</button>
          </li>
          <li>
            <button className={styles.navButton}>My Profile</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AfterNav;