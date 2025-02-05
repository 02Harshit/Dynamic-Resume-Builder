import styles from "./template2.module.css";

const Template2 = ({ userData }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.resume_container}>
        {/* Top Section */}
        <header className={styles.header}>
          <h1>{userData.name}</h1>
          <h2 className={styles.designation}>{userData.designation}</h2>
          <p className={styles.contactInfo}>
            {userData.phone} | {userData.email} |{" "}
            <a
              href={userData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a href={userData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </header>

        {/* Summary Section */}
        <section className={styles.section}>
          <h3>Summary</h3>
          <p>{userData.summary}</p>
        </section>

        <hr className={styles.horizontalLine} />

        {/* Education Section */}
        <section className={styles.section}>
          <h3>Education</h3>
          {userData.education.map((edu, index) => (
            <div key={index} className={styles.educationEntry}>
              <div>
                <strong>{edu.degree}</strong>
                <p>{edu.institution}</p>
              </div>
              <div className={styles.educationDetails}>
                <p>{edu.year}</p>
                <p>{edu.score}</p>
              </div>
            </div>
          ))}
        </section>

        <hr className={styles.horizontalLine} />

        {/* Skills Section */}
        <section className={styles.section}>
          <h3>Skills</h3>
          {userData.skills.map((skill, index) => (
            <div key={index} className={styles.skillCategory}>
              <strong>{skill.category}</strong>
              <ul>
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className={styles.horizontalLine} />

        {/* Experience Section */}
        {userData.experience.length > 0 && (
          <section className={styles.section}>
            <h3>Professional Experience</h3>
            <ul>
              {userData.experience.map((exp, index) => (
                <li key={index}>
                  <strong>{exp.title}</strong> - {exp.company} ({exp.duration})
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
            {userData.projects.map((project, index) => (
              <li key={index}>
                <strong>{project.name}</strong>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <hr className={styles.horizontalLine} />

        {/* POR Section */}
        <section className={styles.section}>
          <h3>Position of Responsibility</h3>
          <ul>
            {userData.por.map((position, index) => (
              <li key={index}>
                <strong>{position.title}</strong>
                <p>{position.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <hr className={styles.horizontalLine} />

        {/* Certificates Section */}
        <section className={styles.section}>
          <h3>Certificates & Honors</h3>
          <ul>
            {userData.certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template2;
