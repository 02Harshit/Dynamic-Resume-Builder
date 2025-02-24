import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './DeveloperCard.module.css';

const DeveloperCard = ({ imageUrl, githubLink, linkedinLink, name }) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={`${name}'s profile`} className={styles.profileImage} />
            <div className={styles.cardOverlay}>
                <h3 style={{color:'white'}}>{name}</h3>
                <div className={styles.socialLinks}>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DeveloperCard;
