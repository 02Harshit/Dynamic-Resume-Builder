// import React from 'react';
import styles from './landing_page_component.module.css';
import Hero3D from './Hero3D'; // Import the Hero3D component
import { useNavigate } from "react-router-dom";
import BlurText from '../assets/BlurTextAnimation/BlurText';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (isSignUp) => {
    navigate('/authorization', { state: { isSignUp } });
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection} id="home">
        <div className={styles.heroContent}>
          <BlurText
            text="Build Your Professional Resume Effortlessly"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          />
          <p className={styles.subheadline}>
            Create stunning resumes in just a few clicks and land your dream job.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.getStarted}
              onClick={() => handleNavigation(false)} // Navigate to Sign Up
            >
              Get Started
            </button>
            <button
              className={styles.login}
              onClick={() => handleNavigation(true)} // Navigate to Sign In
            >
              Login
            </button>
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
