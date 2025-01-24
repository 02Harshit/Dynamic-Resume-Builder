import styles from './aboutUs.module.css';
import SpotlightCard from '../assets/spotlightCard/SpotlightCard.jsx';
import About3D from './About3D.js';

const AboutUs = () => {
    return (
        <section id="about">
        <div className={styles.aboutUsSection}>
            <div className={styles.headingContainer}>
                <span className={styles.headingText}> About Us </span>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.cardContainer}>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <h2 className={styles.cardHeading}>Say Goodbye to paid resume builders!</h2><br></br>
                <p className={styles.cardText}>Our aim is to make resume building easy with the help of our website, it offers various easy to use templates, which will help you to easily create your resume and land into your dream company!</p>
                
                </SpotlightCard>
                </div>
                <div className={styles.animationContainer}>
                    <About3D />
                </div>
            </div>
        </div>
        </section>
    );
}

export default AboutUs;