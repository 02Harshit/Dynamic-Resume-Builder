import styles from "./template2.module.css";

const Template2 = ({ formData }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.resume_container}>
        {/* Top Section */}
        <header className={styles.header}>
          <h1>{formData.name}</h1>
          <h2 className={styles.designation}>{formData.position}</h2>
          <p className={styles.contactInfo}>
            {formData.phone} | {formData.email} |{" "}
            <a
              href={formData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a> {" "}|{" "}
            <a href={formData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {" "}|{" "}
            {formData.address}
          </p>
        </header>

        {/* Summary Section */}
        <section className={styles.section}>
          <h3>Professional Profile</h3>
          <p>{formData.professionalProfile}</p>
        </section>

        <hr className={styles.horizontalLine} />

        {/* Education Section */}
        <section className={styles.section}>
          <h3>Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className={styles.educationEntry}>
              <div>
                <strong>{edu.qualification}</strong>
                <p>{edu.institute}</p>
              </div>
              <div className={styles.educationDetails}>
                <p>{edu.year}</p>
                {/* <p>{edu.score}</p> */}
              </div>
            </div>
          ))}
        </section>

        <hr className={styles.horizontalLine} />

        {/* Skills Section */}
        <section className={styles.section}>
          <h3>Skills</h3>
          {formData.skills && formData.skills.length > 0 ? (
              <ul className={styles.skillsList}>
              {formData.skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>{skill}</li>
              ))}
              </ul>
          ) : (
                <p>No skills added.</p>
              )}
        </section>

        <hr className={styles.horizontalLine} />

        {/* Experience Section */}
        {formData.professionalExperience.length > 0 && (
          <section className={styles.section}>
            <h3>Professional Experience</h3>
            <ul>
              {formData.professionalExperience.map((exp, index) => (
                <li key={index}>
                  <strong>{exp.position}</strong> - {exp.company} ({exp.date})
                  <p>{exp.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <hr className={styles.horizontalLine} />

        {/* Projects Section */}
        <section className={styles.section}>
          <h3>Projects</h3>
          <ul>
            {formData.projects.map((project, index) => (
              <li key={index}>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </li>
            ))}
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

        {/* Certificates Section */}
        {/* <section className={styles.section}>
          <h3>Certificates & Honors</h3>
          <ul>
            {formData.certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default Template2;
