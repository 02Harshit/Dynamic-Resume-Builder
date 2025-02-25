import React, { useState } from "react";
import Template2 from "./Templates/template2";
import styles from "./ResumeForm.module.css";

const ResumeForm2 = ({ selectedTemplate }) => {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        phone: "",
        email: "",
        linkedin: "",
        address: "",
        education: [],
        skills: "",
        professionalProfile: "",
        professionalExperience: [],
        projects: []
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                <textarea name="professionalProfile" placeholder="Professional Profile" onChange={handleChange}></textarea>
                <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
            </div>
            <div className={styles.previewSection}>
                <h2>Resume Preview</h2>
                <Template2 formData={formData} />
            </div>
        </div>
    );
};

export default ResumeForm2