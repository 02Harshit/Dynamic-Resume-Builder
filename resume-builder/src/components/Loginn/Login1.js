// import React, { useState } from "react";
// import styles from "./Login1.module.css";

// const Login1 = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleRegisterClick = () => {
//     setIsActive(true);
//   };

//   const handleLoginClick = () => {
//     setIsActive(false);
//   };

//   return (
//     <div
//       className={`${styles.container} ${isActive ? styles.active : ""}`}
//       id="container"
//     >
//       {/* Sign Up Form */}
//       <div className={`${styles.formContainer} ${styles.signUp}`}>
//         <form>
//           <h1>Create Account</h1>
//           <div className={styles.socialIcons}>
//             <a href="#" className={styles.icon}>
//               <i className="fa-brands fa-google-plus-g"></i>
//             </a>
//             <a href="#" className={styles.icon}>
//               <i className="fa-brands fa-facebook-f"></i>
//             </a>
//             <a href="#" className={styles.icon}>
//               <i className="fa-brands fa-github"></i>
//             </a>
//             <a href="#" className={styles.icon}>
//               <i className="fa-brands fa-linkedin-in"></i>
//             </a>
//           </div>
//           <span>or use your email for registration</span>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button>Sign Up</button>
//         </form>
//       </div>

//       {/* Sign In Form */}
//       <div className={`${styles.formContainer} ${styles.signIn}`}>
//         <form>
//           <h1>Sign In</h1>
//           <div className={styles.socialIcons}>
//             <a href="#" className={styles.icon}>
//               <i className="fa-brands fa-google-plus-g"></i>
//             </a>
//             <a href="#" className={styles.icon}>
//               <i className="fa-brands fa-facebook-f"></i>
//             </a>
//             <a href="#" className={styles.icon}>
//               <i className="fa-brands fa-github"></i>
//             </a>
//             <a href="#" className={styles.icon}>
//               <i className="fa-brands fa-linkedin-in"></i>
//             </a>
//           </div>
//           <span>or use your email password</span>
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <a href="#">Forgot Your Password?</a>
//           <button>Sign In</button>
//         </form>
//       </div>

//       {/* Toggle Panels */}
//       <div className={styles.toggleContainer}>
//         <div className={styles.toggle}>
//           <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
//             <h1>Welcome Back!</h1>
//             <p>Enter your personal details to use all of the site features</p>
//             <button className={styles.hidden} onClick={handleLoginClick}>
//               Sign In
//             </button>
//           </div>
//           <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
//             <h1>Hello, Friend!</h1>
//             <p>
//               Register with your personal details to use all of the site
//               features
//             </p>
//             <button className={styles.hidden} onClick={handleRegisterClick}>
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login1;
