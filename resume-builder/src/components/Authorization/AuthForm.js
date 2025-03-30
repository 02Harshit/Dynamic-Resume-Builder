import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css";
import axios from "axios";

const AuthForm = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const navigate=useNavigate();

  const handleSignInClick = async (e) => {
    e.preventDefault(); // Prevent form submission

    try{
      const response = await axios.post("http://localhost:5000/api/auth/login", {email,password})
      
      console.log(response.data); // Handle successful login response
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (error){
      console.error("Login error:", error.response?.data || error.message); // Handle error response
      alert("Invalid Credentials!"); // Show error message to user
    }
  }

  const handleSignUpClick = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password })
      
      console.log(response.data); // Handle successful signup response
      alert("User created successfully! Kindly proceed to Sign In"); // Show success message to user
      setIsSignUp(true); // Switch to sign-in mode after successful signup
    } catch(error){
      console.error("Signup error:", error.response?.data || error.message); // Handle error response
      alert("User already exists!"); // Show error message to user
    }
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
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputStyling} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className={styles.inputStyling} />
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
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={styles.inputStyling} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputStyling} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputStyling} />
          </div>
          <div style={{ textAlign: "center", marginTop: "5vh" }}>
            <button type="submit" className={styles.authButton} onClick ={handleSignUpClick}>
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
