import React, { useState } from "react";
import Template2 from "../Templates/template2";
import styles from "./ResumeForm.module.css";

const ResumeForm2 = ({ selectedTemplate }) => {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        phone: "",
        email: "",
        linkedin: "",
        Github: "",
        address: "",
        education: [],
        skills: [],
        professionalProfile: "",
        professionalExperience: [],
        projects: [],
        cert: []
    });

    const { education, skills, projects, cert } = formData; // ✅ Destructure arrays

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDynamicChange = (index, e, key) => {
        const updatedArray = [...formData[key]];
        updatedArray[index][e.target.name] = e.target.value;
        setFormData({ ...formData, [key]: updatedArray });
    };

    const addDynamicField = (key, defaultValues) => {
        setFormData({ ...formData, [key]: [...formData[key], defaultValues] });
    };

    const removeDynamicField = (index, key) => {
        const updatedArray = [...formData[key]];
        updatedArray.splice(index, 1);
        setFormData({ ...formData, [key]: updatedArray });
    };

    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <h2>Resume Form 2</h2>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
                <input type="text" name="position" placeholder="Position" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
                <input type="text" name="linkedin" placeholder="LinkedIn Profile" onChange={handleChange} />
                <input type="text" name="Github" placeholder="Github Profile" onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                <textarea name="professionalProfile" placeholder="Professional Profile" onChange={handleChange}></textarea>

                <h3>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className={styles.entry}>
                        <input type="text" name="qualification" placeholder="Qualification" value={edu.qualification} onChange={(e) => handleDynamicChange(index, e, "education")} />
                        <input type="text" name="institute" placeholder="Institute" value={edu.institute} onChange={(e) => handleDynamicChange(index, e, "education")} />
                        <input type="text" name="year" placeholder="Year" value={edu.year} onChange={(e) => handleDynamicChange(index, e, "education")} />
                        <input type="text" name="score" placeholder="Score (optional)" value={edu.score} onChange={(e) => handleDynamicChange(index, e, "education")} />
                        <div className={styles.btnContainer}>
                            <button className={styles.dltbtn} onClick={() => removeDynamicField(index, "education")}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.btn} onClick={() => addDynamicField("education", { qualification: "", course: "", institute: "", year: "", score: "" })}>Add Education</button>
                </div>

                {/* SIMILAR for SKILLS */}
                <h3>Skills</h3>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.entry}>
                        <input type="text" value={skill} onChange={(e) => {
                            const updatedSkills = [...skills];
                            updatedSkills[index] = e.target.value;
                            setFormData({ ...formData, skills: updatedSkills });
                        }} placeholder="Skill set (Language : JAVA | PYTHON )" />
                        <div className={styles.btnContainer}>
                            <button className={styles.dltbtn} onClick={() => removeDynamicField(index, "skills")}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.btn} onClick={() => addDynamicField("skills", "")}>Add Skill</button>
                </div>

                {/* SIMILAR for PROFESSIONAL EXPERIENCE*/}
                <h3>Experience</h3>
                {formData.professionalExperience.map((exp, index) => (
                    <div key={index} className={styles.entry}>
                        <input type="text" name="company" placeholder="Company" value={exp.company} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")} />
                        <input type="text" name="position" placeholder="Position" value={exp.position} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")} />
                        <input type="text" name="date" placeholder="Date" value={exp.date} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")} />
                        <textarea name="description" placeholder="Description" value={exp.description} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")}></textarea>
                        <div className={styles.btnContainer}>
                            <button className={styles.dltbtn} onClick={() => removeDynamicField(index, "professionalExperience")}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className = {styles.btnContainer}>
                <button className={styles.btn} onClick={() => addDynamicField("professionalExperience", { company: "", position: "", date: "", description: "" })}>Add Experience</button>
                </div>

                {/* SIMILAR for PROJECTS */}
                <h3>Projects</h3>
                {projects.map((proj, index) => (
                    <div key={index} className={styles.entry}>
                        <input type="text" name="title" placeholder="Project Title" value={proj.title} onChange={(e) => handleDynamicChange(index, e, "projects")} />
                        <textarea name="description" placeholder="Description" value={proj.description} onChange={(e) => handleDynamicChange(index, e, "projects")}></textarea>
                        <div className={styles.btnContainer}>
                            <button className={styles.dltbtn} onClick={() => removeDynamicField(index, "projects")}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.btn} onClick={() => addDynamicField("projects", { title: "", description: "" })}>Add Project</button>
                </div>

                {/* SIMILAR for CERTIFICATES */}
                <h3>Certificates</h3>
                {cert.map((cert, index) => (
                    <div key={index} className={styles.entry}>
                        <input type="text" name="title" placeholder="Cetificate Title" value={cert.title} onChange={(e) => handleDynamicChange(index, e, "cert")} />
                        <input type="text" name="description" placeholder="Description or Company" value={cert.description} onChange={(e) => handleDynamicChange(index, e, "cert")} />
                    
                        <div className={styles.btnContainer}>
                            <button className={styles.dltbtn} onClick={() => removeDynamicField(index, "cert")} >Remove</button>
                        </div>
                    </div>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.btn} onClick={() => addDynamicField("cert", { title: "", description: "" })}>Add Certificate</button>
                </div>
            </div>

            
            <div className={styles.previewSection}>
                <h2>Resume Preview</h2>
                <Template2 formData={formData} />
            </div>
        </div>
    );
};

export default ResumeForm2;