import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const AuthForm = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handleSignInClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://resume-backend-br40.onrender.com/api/auth/login",
        { email, password }
      );

      const { token, user } = response.data;
      console.log("Login Successful:", response.data);

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      axios.defaults.headers.common["Authorization"] = token;

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Invalid Credentials!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 6 characters long, include an uppercase letter, a number, and a special character."
      );
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://resume-backend-br40.onrender.com/api/auth/signup",
        { name, email, password }
      );
      console.log(response.data);
      alert("User created successfully! Kindly proceed to Sign In");
      setIsSignUp(true);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("User already exists!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location.state && location.state.isSignUp !== undefined) {
      setIsSignUp(location.state.isSignUp);
    }
  }, [location.state]);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setError("");
  };

  return (
    <>
      {isLoading && (
        <div className={styles.loaderOverlay}>
          <div className={styles.fancyLoader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <div
        className={`${styles["auth-container"]} ${
          isSignUp ? "" : styles["sign-up-mode"]
        }`}
      >
        {/* Sign In Form */}
        <div
          className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
        >
          <form>
            <div className={styles.headingContainer}>
              <h1>Sign in</h1>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputStyling}
            />
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputStyling}
              />
              <button
                type="button"
                className={styles.eyeButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "3vh" }}>
              <button
                type="submit"
                className={styles.authButton}
                onClick={handleSignInClick}
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>

        {/* Sign Up Form */}
        <div
          className={`${styles["form-container"]} ${styles["sign-up-container"]}`}
        >
          <form>
            <div className={styles.headingContainer}>
              <h1>Sign up</h1>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputStyling}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputStyling}
                required
              />
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.inputStyling}
                  required
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.inputStyling}
                required
              />
              {error && <p className={styles.errorMessage}>{error}</p>}
            </div>
            <div style={{ textAlign: "center", marginTop: "5vh" }}>
              <button
                type="submit"
                className={styles.authButton}
                onClick={handleSignUpClick}
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
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
    </>
  );
};

export default AuthForm;
