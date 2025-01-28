import React, { useState } from "react";
import styles from "./AuthForm.module.css"; // Import the modular CSS

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div
      className={`${styles["auth-container"]} ${
        isSignUp ?  "" : styles["sign-up-mode"]
      }`}
    >
      {/* Sign In Form */}
      <div className={`${styles["form-container"]} ${styles["sign-in-container"]}`}>
        <form>
          <div className={styles.headingContainer}>
          <h1>Sign in</h1>
          </div>
          {/* <div className={styles["social-container"]}>
            <a href="#" className={styles["social"]}>F</a>
            <a href="#" className={styles["social"]}>G</a>
            <a href="#" className={styles["social"]}>in</a>
          </div> */}
          {/* <span>or use your account</span> */}
          <input type="email" placeholder="Email" className={styles.inputStyling} />
          <input type="password" placeholder="Password" className={styles.inputStyling} />
          {/* <a href="#">Forgot your password?</a> */}
          <div style={{textAlign:"center",marginTop:"3vh"}}>
          <button type="submit">Sign In</button>
          </div>
        </form>
      </div>

      {/* Sign Up Form */}
      <div className={`${styles["form-container"]} ${styles["sign-up-container"]}`}>
        <form>
          <div className={styles.headingContainer}>
            <h1>Sign Up</h1>
          </div>
          <div className={styles.inputContainer}>
          <input type="text" placeholder="Name"  className={styles.inputStyling}/>
          <input type="email" placeholder="Email" className={styles.inputStyling}/>
          <input type="password" placeholder="Password" className={styles.inputStyling}/>
          </div>
          <div style={{textAlign:"center",marginTop:"5vh"}}>
          <button type="submit" className={styles.authButton}>Sign Up</button>
          </div>
        </form>
      </div>

      {/* Overlay Section */}
      <div className={styles["overlay-container"]}>
        <div className={styles["overlay"]}>
          <div className={styles["overlay-panel"]}>
            <h1>{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h1>
            <p>
              {isSignUp
                ? "To keep connected with us please sign in with your account"
                : "Enter your personal details and start your journey with us"}
            </p>
            <button className={`$styles["ghost"] $styles["authButton"]`} onClick={toggleForm} >
              {!isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
