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
          <div className={styles["social-container"]}>
            <a href="#" className={styles.social}>
              F
            </a>
            <a href="#" className={styles.social}>
              G+
            </a>
            <a href="#" className={styles.social}>
              in
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Overlay Section */}
      <div className={styles["overlay-container"]}>
        <div className={styles.overlay}>
          <div className={styles["overlay-panel"]}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className={styles.ghost} onClick={togglePanel}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
