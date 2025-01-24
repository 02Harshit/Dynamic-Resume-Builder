import DeveloperCard from './DeveloperCard/DeveloperCard.js';
import profilePage from '../assets/hero_component.jpg';
import styles from './developerPage.module.css';

const DeveloperPage = () => {
    return (
        <section id="developer">
        <div className={styles.developerPageContainer}>
            <div className={styles.headingContainer}>
                Meet Our Team!
            </div>
            <div className={styles.cardContainer}>
                <DeveloperCard 
                    imageUrl={profilePage} 
                    githubLink={'https://github.com/02Harshit'} 
                    linkedinLink={'https://www.linkedin.com/in/harshit-mittal-36a461261/'} 
                    name={'Harshit Mittal'}
                />
                <DeveloperCard 
                    imageUrl={profilePage} 
                    githubLink={'https://github.com/Anjali8827'} 
                    linkedinLink={'https://www.linkedin.com/in/anjali-pawar-449b7b2b2/'} 
                    name={'Anjali Pawar'}
                />
                <DeveloperCard 
                    imageUrl={profilePage} 
                    githubLink={'https://github.com/SJ09007'} 
                    linkedinLink={'https://www.linkedin.com/in/shruti-jain-a08654195/'} 
                    name={'Shruti Jain'}
                />
            </div>
        </div>
        </section>
    );
}

export default DeveloperPage;
