import styles from "./template1.module.css";
import { FaPhone, FaEnvelope, FaExternalLinkAlt, FaLinkedin, FaHome } from "react-icons/fa";

const PhoneIcon = () => <FaPhone style={{ marginLeft: "10px", color: "orange", fontSize: "15px" }} />;
const EMailIcon = () => <FaEnvelope style={{ marginLeft: "10px", color: "orange", fontSize: "15px" }} />;
const LinkIcon = () => <FaExternalLinkAlt style={{ marginLeft: "5px", fontSize: "12px", color: "blue" }} />;
const Linkedin = () => <FaLinkedin style={{ marginLeft: "10px", color: "orange", fontSize: "15px" }} />;
const Home = () => <FaHome style={{ marginLeft: "10px", color: "orange", fontSize: "15px" }} />;


const Template1 = ({ userData }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.resume_container}>
                {/* Header Section */}
                <div className={styles.topContainer}>
                    <div>
                        <center><span className={styles.name}>{userData.name}</span></center>
                        <center><span className={styles.position}>{userData.position}</span></center>
                    </div>
                </div>

                {/* Body Section */}
                <div className={styles.bodyContainer}>
                    {/* Left Container */}
                    <div className={styles.leftContainer}>
                        <div className={styles.personalDetails} >
                            <p>{userData.phone}<PhoneIcon /></p>
                            <p>{userData.email}<EMailIcon /></p>
                            <p>{userData.linkedin}<Linkedin /></p>
                            <p>{userData.address}<Home/></p>
                        </div>

                        <div className={styles.educationContainer} >
                            <h1 className={styles.heading}>EDUCATION</h1>
                            {userData.education.length > 0 ? (
                                userData.education.map((exp, index) => (
                                    <div key={index} className={styles.educationSection}>
                                        <h2 className={styles.qualification} style={{fontSize:'16px', color:'#455a6e'}}>{exp.qualification}</h2>
                                        <p className={styles.course} style={{fontSize:'15px'}}>{exp.course} </p>
                                        <p className={styles.institute} style={{fontSize:'15px'}}>{exp.institute}</p>
                                        <p className={styles.year} style={{fontSize:'15px'}}>{exp.year}</p>
                                    </div>
                            ))
                        ) : (
                            <p>No education details added.</p>
                        )}
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className={styles.rightContainer}>
                        <h1 className={styles.heading}>PROFESSIONAL PROFILE</h1>
                        <p className={styles.body}>{userData.professionalProfile}</p>

                        {/* Professional Experience */}
                        <h1 className={styles.heading}>PROFESSIONAL EXPERIENCE</h1>
                        {userData.professionalExperience.length > 0 ? (
                            userData.professionalExperience.map((exp, index) => (
                                <div key={index} className={styles.experienceSection}>
                                    <h2 className={styles.expPosition}>{exp.position}</h2>
                                    <p className={styles.expCompany}>{exp.company} - {exp.location}</p>
                                    <p className={styles.expDate}>{exp.date}</p>
                                    <ul className={styles.expList}>
                                        {exp.learnings.map((learning, idx) => (
                                            <li key={idx}>{learning}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>No professional experience added.</p>
                        )}

                        {/* Projects Section */}
                        <h1 className={styles.heading}>PROJECTS</h1>
                        {userData.projects.length > 0 ? (
                            userData.projects.map((project, index) => (
                                <div key={index} className={styles.projectSection}>
                                    <h2 className={styles.projectTitle}>{project.name}</h2>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                    <p className={styles.projectTechnologies}><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
                                    
                                    <ul className={styles.projectContributions}>
                                        {project.contributions.map((contribution, idx) => (
                                            <li key={idx}>{contribution}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>No projects added.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template1;
