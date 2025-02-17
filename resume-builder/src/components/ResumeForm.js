// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import styles from "./ResumeForm.module.css";
// import Template1 from "./Templates/template1";
// import Template2 from "./Templates/template2";

// const ResumeForm = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const selectedTemplate = queryParams.get("template");

//   const [formData, setFormData] = useState({
//     name: "",
//     position: "",
//     phone: "",
//     email: "",
//     linkedin: "",
//     address: "",
//     professionalProfile: "",
//     education: [],
//     skills: "",
//     professionalExperience: [],
//     projects: []
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleArrayChange = (e, key) => {
//     setFormData({ ...formData, [key]: e.target.value.split(",") });
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formSection}>
//         <h2>Enter Your Details</h2>
//         <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
//         <input type="text" name="position" placeholder="Position" onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//         <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
//         <input type="text" name="linkedin" placeholder="LinkedIn Profile" onChange={handleChange} />
//         <input type="text" name="address" placeholder="Address" onChange={handleChange} />
//         <textarea name="professionalProfile" placeholder="Professional Profile" onChange={handleChange}></textarea>
//         <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={(e) => handleArrayChange(e, "skills")} />
//       </div>

//       <div className={styles.previewSection}>
//         <h2>Resume Preview</h2>
//         {selectedTemplate === "template1" ? <Template1 formData={formData} /> : <Template2 formData={formData} />}
//       </div>
//     </div>
//   );
// };

// export default ResumeForm;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ResumeForm.module.css";
import Template1 from "./Templates/template1";
import Template2 from "./Templates/template2";

const ResumeForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTemplate = queryParams.get("template");

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

  const [education, setEducation] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value.split(",") });
    };

  const handleEducationChange = (index, e) => {
    const updatedEducation = [...education];
    updatedEducation[index][e.target.name] = e.target.value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([...education, { qualification: "", course: "", institute: "", year: "" }]);
  };

  const saveEducation = () => {
    setFormData({ ...formData, education });
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

        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className={styles.educationEntry}>
            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              value={edu.qualification}
              onChange={(e) => handleEducationChange(index, e)}
            />
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={edu.course}
              onChange={(e) => handleEducationChange(index, e)}
            />
            <input
              type="text"
              name="institute"
              placeholder="Institute"
              value={edu.institute}
              onChange={(e) => handleEducationChange(index, e)}
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={edu.year}
              onChange={(e) => handleEducationChange(index, e)}
            />
          </div>
        ))}
        <button onClick={addEducation}>Add Education</button>
        <button onClick={saveEducation}>Save Education</button>
      </div>
      
      <div className={styles.previewSection}>
        <h2>Resume Preview</h2>
        {selectedTemplate === "template1" ? <Template1 formData={formData} /> : <Template2 formData={formData} />}
      </div>
    </div>
  );
};

export default ResumeForm;