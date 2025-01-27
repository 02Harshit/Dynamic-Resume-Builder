import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const togglePanel = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div
      className={`${styles.container} ${
        isRightPanelActive ? styles["right-panel-active"] : ""
      }`}
    >
      {/* Sign-In Form */}
      <div className={`${styles["form-container"]} ${styles["sign-in-container"]}`}>
        <form>
          <h1>Sign in</h1>
          
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Overlay Section */}
      <div className={styles["overlay-container"]}>
        <div className={styles.overlay}>
              <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
