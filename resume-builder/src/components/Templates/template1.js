    import styles from "./template1.module.css";
    import { FaPhone, FaEnvelope, FaExternalLinkAlt, FaLinkedin, FaHome } from "react-icons/fa";
    import { forwardRef } from "react";


    const PhoneIcon = () => <FaPhone className={`${styles.phoneIcon} ${styles.icon}`} />;
    const EMailIcon = () => <FaEnvelope className={`${styles.emailIcon} ${styles.icon}`} />;
    const LinkIcon = () => <FaExternalLinkAlt className={`${styles.linkIcon} ${styles.icon}`} />;
    const Linkedin = () => <FaLinkedin className={`${styles.linkedinIcon} ${styles.icon}`} />;
    const Home = () => <FaHome className={`${styles.homeIcon} ${styles.icon}`} />;



    const Template1 = forwardRef(({ formData }, ref) => {
        return (
            <div ref = {ref || null} className={styles.mainContainer}>
                <div className={styles.resume_container}>
                    {/* Header Section */}
                    <div className={styles.topContainer}>
                        <div>
                            {formData.name ? (
                                <center><span className={styles.name}>{formData.name}</span></center>
                            ) : (
                                <center><span className={styles.name}>Your Name</span></center>
                            )}
                            {formData.position ? (
                                <center><span className={styles.position}>{formData.position}</span></center>
                            ) : (
                                <center><span className={styles.position}>position</span></center>
                            )}
                        </div>
                    </div>

                    {/* Body Section */}
                    <div className={styles.bodyContainer}>
                        {/* Left Container */}
                        <div className={styles.leftContainer}>
                            <div className={styles.personalDetails} >
                                {formData.phone ? <p>{formData.phone}<PhoneIcon /></p> : <p>9999999999<PhoneIcon /></p>  }
                                {formData.email ? <p>{formData.email}<EMailIcon /></p> : <p>Example@gmail.com<EMailIcon /></p>}
                                {formData.linkedin ? <p>{formData.linkedin}<Linkedin /></p> : <p>linkedin_profile<Linkedin /></p>}
                                {formData.address ? <p>{formData.address}<Home /></p> : <p>City (state)<Home /></p>}
                            </div>

                            <div className={styles.educationContainer} >
                                <h1 className={styles.heading}>EDUCATION</h1>
                                {formData.education.length > 0 ? (
                                    formData.education.map((exp, index) => (
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
                            <br></br>
                            <div className={styles.skillsContainer}>
                                <h1 className={styles.heading}>Skills</h1><br></br>
                                {formData.skills && formData.skills.length > 0 ? (
                                <ul className={styles.skillsList}>
                            {formData.skills.map((skill, index) => (
                                <li key={index} className={styles.skillItem}>{skill}</li>
                                ))}
                            </ul>
                            ) : (
                                <p>No skills added.</p>
                        )}
                            </div>
                        </div>

                        {/* Right Container */}
                        <div className={styles.rightContainer}>
                            <h1 className={styles.heading}>PROFESSIONAL PROFILE</h1>
                            {formData.professionalProfile ? <p className={styles.body}>{formData.professionalProfile}</p> : <p className={styles.body}>No professional profile added.</p> } 
                            <br></br>
                            
                            {/* Professional Experience */}
                            <h1 className={styles.heading}>PROFESSIONAL EXPERIENCE</h1>
                            {formData.professionalExperience.length > 0 ? (
                                formData.professionalExperience.map((exp, index) => (
                                    <div key={index} className={styles.experienceSection}>
                                        <h2 className={styles.expPosition}>{exp.position}</h2>
                                        <p className={styles.expCompany}>{exp.company} - {exp.location}</p>
                                        <p className={styles.expDate}>{exp.date}</p>
                                        <p className={styles.expDescription}>{exp.description}</p>
                                        
                                    </div>
                                ))
                            ) : (
                                <p>No professional experience added.</p>
                            )}
                            <br></br>

                            {/* Projects Section */}
                            <h1 className={styles.heading}>PROJECTS</h1>
                            {formData.projects.length > 0 ? (
                                formData.projects.map((project, index) => (
                                    <div key={index} className={styles.projectSection}>
                                        <h2 className={styles.projectTitle}>{project.title}</h2>
                                        <p className={styles.projectDescription}>{project.description}</p>
                                        <p className={styles.projectTechnologies}><strong>Technologies Used:</strong> {project.technologies}</p>
                                        
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
    });

    export default Template1;
