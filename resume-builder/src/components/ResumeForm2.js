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
        Github: "",
        address: "",
        education: [],
        skills: "",
        professionalProfile: "",
        professionalExperience: [],
        projects: []
    });

    const [education, setEducation] = useState([]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDynamicChange = (index, e, setter, state) => {
        const updatedData = [...state];
        updatedData[index][e.target.name] = e.target.value;
        setter(updatedData);
    };

    const addDynamicField = (setter, state, defaultValues) => {
        setter([...state, defaultValues]);
    };

    const saveDynamicField = (key, state) => {
        setFormData({ ...formData, [key]: state });
    };

    const handleArrayChange = (e, key) => {
        setFormData({ ...formData, [key]: e.target.value.split(",") });
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
                            <input type="text" name="qualification" placeholder="Qualification" value={edu.qualification} onChange={(e) => handleDynamicChange(index, e, setEducation, education)} />
                            <input type="text" name="course" placeholder="Course" value={edu.course} onChange={(e) => handleDynamicChange(index, e, setEducation, education)} />
                            <input type="text" name="institute" placeholder="Institute" value={edu.institute} onChange={(e) => handleDynamicChange(index, e, setEducation, education)} />
                            <input type="text" name="year" placeholder="Year" value={edu.year} onChange={(e) => handleDynamicChange(index, e, setEducation, education)} />
                        </div>
                    ))}
                    <div className={styles.btnContainer}>
                    <button className={styles.btn} onClick={() => addDynamicField(setEducation, education, { qualification: "", course: "", institute: "", year: "" })}>Add Education</button>
                    <button className={styles.btn} onClick={() => saveDynamicField("education", education)}>Save Education</button>
                    </div>
                
                    {/* SKILLS SECTION */}
                    <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={(e) => handleArrayChange(e, "skills")} />                            
                    
        
            </div>
            <div className={styles.previewSection}>
                <h2>Resume Preview</h2>
                <Template2 formData={formData} />
            </div>
        </div>
    );
};

export default ResumeForm2