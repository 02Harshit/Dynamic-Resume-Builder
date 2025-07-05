import styles from "./template2.module.css";

const Template2 = ({ formData }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.resume_container}>
        {/* Top Section */}
        <header className={styles.header}>
          {formData.name ? <h1>{formData.name}</h1> : <h1>Your Name</h1> }
          {formData.position ? <h2 className={styles.designation}>{formData.position}</h2> : <h2 className={styles.designation}>position</h2> }
          <p className={styles.contactInfo}>
            {formData.phone ? formData.phone : 9999999999 } | {formData.email ? formData.email : "example@gmail.com" } |{" "}
            {/* <a
              href={"https://www.linkedin.com/in/"+formData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            > */}
            Linkedin : {formData.linkedin}
            {/* </a> {" "}|{" "}
            <a href={"https://www.github.com/"+formData.Github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a> */}
            {" "}|{" "}
            GitHub : {formData.Github}{" "}|{" "}
            {formData.address ? formData.address : "City (state)"}
          </p>
        </header>

        {/* Summary Section */}
        <section className={styles.section}>
          <h3>Professional Profile</h3>
          {formData.professionalProfile ? <p>{formData.professionalProfile}</p> : <p>No professional profile added.</p> }
        </section>

        <hr className={styles.horizontalLine} />

        {/* Education Section */}
        {<section className={styles.section}>
          <h3 className={styles.heading}>Education</h3>
          {formData.education && formData.education.length > 0 ? (
              formData.education.map((edu, index) => (
                <div key={index} className={styles.educationEntry}>
                  <div>
                    <strong>{edu.qualification}</strong>
                    <p>{edu.institute}</p>
                  </div>
                  <div className={styles.educationDetails}>
                    <p>{edu.year}</p>
                    {edu.score ? <p style={{fontSize:"small"}}>{edu.score}</p> : "" }
                  </div>
                </div>
              ))
            ) : (<p>No education added.</p>)}
        </section>}

        <hr className={styles.horizontalLine} />

        {/* Skills Section */}
        <section className={styles.section}>
          <h3 className={styles.heading}>Skills</h3>

          {formData.skills && formData.skills.length > 0 ? (
            <ul className={styles.skillCategory}>
              {formData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
                </ul>
                ) : (
                  <p>No skills added.</p>
              )}
        </section>

        <hr className={styles.horizontalLine} />

        {/* Experience Section */}
        <section className={styles.section}>
          <h3 className={styles.heading}>Professional Experience</h3>

          {formData.professionalExperience.length > 0 && formData.professionalExperience ? (
              <ul>
                {formData.professionalExperience.map((exp, index) => (
                  <li key={index}>
                    <strong>{exp.position}</strong> - {exp.company} ({exp.date})
                    <p>{exp.description}</p>
                  </li>
                ))}
              </ul>
          ):(
            <p>No experience added. </p>
          )}
        </section>

        <hr className={styles.horizontalLine} />

        {/* Projects Section */}
        <section className={styles.section}>
          <h3>Projects</h3>
          <ul>
            {formData.projects && formData.projects.length > 0 ? (
              formData.projects.map((project, index) => (
                <li key={index}>
                  <strong>{project.title}</strong>
                  <p>{project.description}</p>
                </li>
              ))
            ) : (<p>No projects added.</p>) }
          </ul>
        </section>

        <hr className={styles.horizontalLine} />

        {/* POR Section */}
        {/* <section className={styles.section}>
          <h3>Position of Responsibility</h3>
          <ul>
            {formData.por.map((position, index) => (
              <li key={index}>
                <strong>{position.title}</strong>
                <p>{position.description}</p>
              </li>
            ))}
          </ul>
        </section> */}

        {/* <hr className={styles.horizontalLine} /> */}

        {/*Certificates Section*/}
        <section className={styles.section}>
          <h3>Certificates & Honors</h3>
          <ul>
            {formData.cert.map((cert, index) => (
              <li key={index}><strong>{cert.title}</strong> : {cert.description} </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template2;


