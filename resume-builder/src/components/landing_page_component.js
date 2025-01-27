import React from 'react';
import styles from './landing_page_component.module.css';
import Hero3D from './Hero3D'; // Import the Hero3D component
import Navbar from './Navbar';
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      {/* <Navbar />       */}

      {/* Hero Section */}
      <section className={styles.heroSection} id="home">
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>Build Your Professional Resume Effortlessly</h1>
          <p className={styles.subheadline}>Create stunning resumes in just a few clicks and land your dream job.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.getStarted}>Get Started</button>
            <NavLink to="/login" ><button className={styles.login}>Login</button></NavLink>
          </div>
        </div>
        {/* 3D Animation as Foreground */}
        <div className={styles.hero3D}>
          <Hero3D /> {/* Adding Hero3D component here */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
