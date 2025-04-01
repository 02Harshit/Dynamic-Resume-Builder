// import React, { useState } from "react";
// import Template1 from "../Templates/template1";
// import styles from "./ResumeForm.module.css";

// const ResumeForm1 = ({ selectedTemplate }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         position: "",
//         phone: "",
//         email: "",
//         linkedin: "",
//         address: "",
//         education: [],
//         skills: "",
//         professionalProfile: "",
//         professionalExperience: [],
//         projects: []
//     });

//     const [education, setEducation] = useState([]);
//     const [experience, setExperience] = useState([]);
//     const [projects, setProjects] = useState([]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleArrayChange = (e, key) => {
//         setFormData({ ...formData, [key]: e.target.value.split(",") });
//     };

//     const handleDynamicChange = (index, e, setter, state) => {
//         const updatedData = [...state];
//         updatedData[index][e.target.name] = e.target.value;
//         setter(updatedData);
//     };

//     const addDynamicField = (setter, state, defaultValues) => {
//         setter([...state, defaultValues]);
//     };

//     const saveDynamicField = (key, state) => {
//         setFormData({ ...formData, [key]: state });
//     };

//     return (
//         <div className={styles.container}>
//         <div className={styles.formSection}>
//             <h2>Enter Your Details</h2>
//             <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
//             <input type="text" name="position" placeholder="Position" onChange={handleChange} />
//             <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//             <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
//             <input type="text" name="linkedin" placeholder="LinkedIn Profile" onChange={handleChange} />
//             <input type="text" name="address" placeholder="Address" onChange={handleChange} />
//             <textarea name="professionalProfile" placeholder="Professional Profile" onChange={handleChange}></textarea>
//             <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={(e) => handleArrayChange(e, "skills")} />

//             <h3>Education</h3>
//             {education.map((edu, index) => (
//             <div key={index} className={styles.entry}>
//                 <input type="text" name="qualification" placeholder="Qualification" value={edu.qualification} onChange={(e) => handleDynamicChange(index, e, setEducation, education)} />
//                 <input type="text" name="course" placeholder="Course" value={edu.course} onChange={(e) => handleDynamicChange(index, e, setEducation, education)} />
//                 <input type="text" name="institute" placeholder="Institute" value={edu.institute} onChange={(e) => handleDynamicChange(index, e, setEducation, education)} />
//                 <input type="text" name="year" placeholder="Year" value={edu.year} onChange={(e) => handleDynamicChange(index, e, setEducation, education)} />
//             </div>
//             ))}
//             <div className={styles.btnContainer}>
//             <button className={styles.btn} onClick={() => addDynamicField(setEducation, education, { qualification: "", course: "", institute: "", year: "" })}>Add Education</button>
//             <button className={styles.btn} onClick={() => saveDynamicField("education", education)}>Save Education</button>
//             </div>

//             <h3>Experience</h3>
//             {experience.map((exp, index) => (
//             <div key={index} className={styles.entry}>
//                 <input type="text" name="company" placeholder="Company" value={exp.company} onChange={(e) => handleDynamicChange(index, e, setExperience, experience)} />
//                 <input type="text" name="position" placeholder="position" value={exp.position} onChange={(e) => handleDynamicChange(index, e, setExperience, experience)} />
//                 <input type="text" name="location" placeholder="location" value={exp.location} onChange={(e) => handleDynamicChange(index, e, setExperience, experience)} />
//                 <input type="text" name="date" placeholder="date" value={exp.date} onChange={(e) => handleDynamicChange(index, e, setExperience, experience)}></input>
//                 <textarea name="description" placeholder="description" value={exp.description} onChange={(e) => handleDynamicChange(index, e, setExperience, experience)}></textarea>
//             </div>
//             ))}
//             <div className={styles.btnContainer}>
//             <button className={styles.btn} onClick={() => addDynamicField(setExperience, experience, { company: "", position: "", location: "",date: "" })}>Add Experience</button>
//             <button className={styles.btn} onClick={() => saveDynamicField("professionalExperience", experience)}>Save Experience</button>
//             </div>

//             <h3>Projects</h3>
//             {projects.map((proj, index) => (
//             <div key={index} className={styles.entry}>
//                 <input type="text" name="title" placeholder="Project Title" value={proj.title} onChange={(e) => handleDynamicChange(index, e, setProjects, projects)} />
//                 <textarea name="description" placeholder="Project Description" value={proj.description} onChange={(e) => handleDynamicChange(index, e, setProjects, projects)}></textarea>
//                 <input type="text" name="technologies" placeholder="Technologies used" value={proj.technologies} onChange={(e) => handleDynamicChange(index, e, setProjects, projects)} />
//             </div>
//             ))}

//             <div className={styles.btnContainer}>
//             <button className={styles.btn} onClick={() => addDynamicField(setProjects, projects, { title: "", description: "" })}>Add Project</button>
//             <button className={styles.btn} onClick={() => saveDynamicField("projects", projects)}>Save Projects</button>
//             </div>
//         </div>
//     <div className={styles.previewSection}>
//         <h2>Resume Preview</h2>
//         <Template1 formData={formData} />
//     </div>
// </div>

    
//     );
// };

// export default ResumeForm1

import React, { useState } from "react";
import Template1 from "../Templates/template1";
import styles from "./ResumeForm.module.css";

const ResumeForm1 = ({ selectedTemplate }) => {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        phone: "",
        email: "",
        linkedin: "",
        address: "",
        education: [],
        skills: [],
        professionalProfile: "",
        professionalExperience: [],
        projects: []
    });

    // Update Form Data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle skills as comma-separated values
    const handleArrayChange = (e, key) => {
        const valueArray = e.target.value.split(",").map((item) => item.trim());
        setFormData((prev) => ({ ...prev, [key]: valueArray }));
    };

    // Handle dynamic field updates (Education, Experience, Projects)
    const handleDynamicChange = (index, e, key) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [key]: prev[key].map((item, i) => (i === index ? { ...item, [name]: value } : item)),
        }));
    };

    // Add new dynamic field
    const addDynamicField = (key, defaultValues) => {
        setFormData((prev) => ({
            ...prev,
            [key]: [...prev[key], defaultValues]
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <h2>Enter Your Details</h2>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
                <input type="text" name="position" placeholder="Position" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
                <input type="text" name="linkedin" placeholder="LinkedIn Profile" onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                <textarea name="professionalProfile" placeholder="Professional Profile" onChange={handleChange}></textarea>
                <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={(e) => handleArrayChange(e, "skills")} />

                {/* Education Section */}
                <h3>Education</h3>
                {formData.education.map((edu, index) => (
                    <div key={index} className={styles.entry}>
                        <input type="text" name="qualification" placeholder="Qualification" value={edu.qualification} onChange={(e) => handleDynamicChange(index, e, "education")} />
                        <input type="text" name="course" placeholder="Course" value={edu.course} onChange={(e) => handleDynamicChange(index, e, "education")} />
                        <input type="text" name="institute" placeholder="Institute" value={edu.institute} onChange={(e) => handleDynamicChange(index, e, "education")} />
                        <input type="text" name="year" placeholder="Year" value={edu.year} onChange={(e) => handleDynamicChange(index, e, "education")} />
                    </div>
                ))}
                <div className = {styles.btnContainer}>
                <button className={styles.btn} onClick={() => addDynamicField("education", { qualification: "", course: "", institute: "", year: "" })}>Add Education</button>
                </div>
                {/* Experience Section */}
                <h3>Experience</h3>
                {formData.professionalExperience.map((exp, index) => (
                    <div key={index} className={styles.entry}>
                        <input type="text" name="company" placeholder="Company" value={exp.company} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")} />
                        <input type="text" name="position" placeholder="Position" value={exp.position} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")} />
                        <input type="text" name="location" placeholder="Location" value={exp.location} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")} />
                        <input type="text" name="date" placeholder="Date" value={exp.date} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")} />
                        <textarea name="description" placeholder="Description" value={exp.description} onChange={(e) => handleDynamicChange(index, e, "professionalExperience")}></textarea>
                    </div>
                ))}
                <div className = {styles.btnContainer}>
                <button className={styles.btn} onClick={() => addDynamicField("professionalExperience", { company: "", position: "", location: "", date: "", description: "" })}>Add Experience</button>
                </div>
                {/* Projects Section */}
                <h3>Projects</h3>
                {formData.projects.map((proj, index) => (
                    <div key={index} className={styles.entry}>
                        <input type="text" name="title" placeholder="Project Title" value={proj.title} onChange={(e) => handleDynamicChange(index, e, "projects")} />
                        <textarea name="description" placeholder="Project Description" value={proj.description} onChange={(e) => handleDynamicChange(index, e, "projects")}></textarea>
                        <input type="text" name="technologies" placeholder="Technologies Used" value={proj.technologies} onChange={(e) => handleDynamicChange(index, e, "projects")} />
                    </div>
                ))}
                <div className = {styles.btnContainer}>
                <button className={styles.btn} onClick={() => addDynamicField("projects", { title: "", description: "", technologies: "" })}>Add Project</button>
                </div>
            </div>

            {/* Live Preview Section */}
            <div className={styles.previewSection}>
                <h2>Resume Preview</h2>
                <Template1 formData={formData} />
            </div>
        </div>
    );
};

export default ResumeForm1;
