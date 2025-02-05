// Import the necessary components and styles
import Template2 from "./template2";
import React from "react";

// Example user data
const userData = {
  name: "Shruti Jain",
  designation: "Software Engineer",
  phone: "+919109607094",
  email: "sj0900777@gmail.com",
  linkedin: "https://www.linkedin.com/in/shruti-jain-a08654195/",
  github: "https://github.com/SJ09007",
  summary:
    "A passionate developer specializing in modern web technologies, adept at creating dynamic and user-friendly applications. With a strong foundation in frameworks and languages such as JavaScript, HTML, and CSS, they excel in delivering innovative solutions that enhance user experiences. Committed to continuous learning and staying updated with industry trends, this developer thrives on tackling complex challenges and contributing to impactful projects.",
  education: [
    {
      degree: "Integrated BTech+MTech (IT)",
      institution: "DAVV University",
      year: "2022-2027",
      score: "8.5 CGPA",
    },
    {
      degree: "Higher Secondary (12th , PCM)",
      institution: "SSSVV , Indore",
      year: "2020-2022",
      score: "94%",
    },
    {
      degree: "Secondary Education(10th)",
      institution: "SSSVV , Indore",
      year: "2019-2020",
      score: "91%",
    },
  ],
  skills: [
    { category: "Languages", items: ["JavaScript", "Python"] },
    { category: "Frameworks", items: ["React", "Node.js"] },
    { category: "Soft Skills", items: ["Problem-solving", "Teamwork"] },
  ],
  experience: [
    {
      title: "Software Developer",
      company: "ABC Corp",
      duration: "2022-Present",
      description:
        "Developed and maintained web applications using React and Node.js.",
    },
  ],
  projects: [
    {
      name: "Resume Builder",
      description:
        "A web app to generate professional resumes based on user input.",
    },
  ],
  por: [
    {
      title: "Club Secretary",
      description:
        "Managed events and workshops for the university coding club.",
    },
  ],
  certificates: ["Google Cloud Certified"],
};

// Template2Render Component
const Template2Render = () => {
  return <Template2 userData={userData} />;
};

// Export the Template2Render component so it can be used elsewhere
export default Template2Render;
