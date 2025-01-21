import styles from './aboutUs.module.css';


const AboutUs = () => {
    return (
        <div>
            <div className={styles.headingContainer}>
                <span className={styles.headingText}> About Us </span>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.cardContainer}></div>
                <div className={styles.animationContainer}></div>
            </div>
        </div>
    );
}

export default AboutUs;