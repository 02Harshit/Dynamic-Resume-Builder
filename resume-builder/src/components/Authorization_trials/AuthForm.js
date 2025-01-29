import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate=useNavigate();
  const handleSignInClick = () => {
    navigate("/dashboard");
  }

  useEffect(() => {
    // Set initial state based on navigation state
    if (location.state && location.state.isSignUp !== undefined) {
      setIsSignUp(location.state.isSignUp);
    }
  }, [location.state]);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div
      className={`${styles["auth-container"]} ${
        isSignUp ? "" : styles["sign-up-mode"]
      }`}
    >
      {/* Sign In Form */}
      <div className={`${styles["form-container"]} ${styles["sign-in-container"]}`}>
        <form>
          <div className={styles.headingContainer}>
            <h1>Sign in</h1>
          </div>
          <input type="email" placeholder="Email" className={styles.inputStyling} />
          <input type="password" placeholder="Password" className={styles.inputStyling} />
          <div style={{ textAlign: "center", marginTop: "3vh" }}>
            <button type="submit" className={styles.authButton} onClick={handleSignInClick}>Sign In</button>
          </div>
        </form>
      </div>

      {/* Sign Up Form */}
      <div className={`${styles["form-container"]} ${styles["sign-up-container"]}`}>
        <form>
          <div className={styles.headingContainer}>
            <h1>Sign up</h1>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Name" className={styles.inputStyling} />
            <input type="email" placeholder="Email" className={styles.inputStyling} />
            <input type="password" placeholder="Password" className={styles.inputStyling} />
          </div>
          <div style={{ textAlign: "center", marginTop: "5vh" }}>
            <button type="submit" className={styles.authButton}>
              Sign Up
            </button>
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
            <button className={styles["ghost"]} onClick={toggleForm}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
