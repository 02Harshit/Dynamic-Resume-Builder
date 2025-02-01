import { useState } from "react";
import Template1 from "./Templates/template1";

const ResumePage = () => {
    const [userData, setUserData] = useState({
        name: "ANJALI PAWAR",
        position: "SOFTWARE TRAINEE",
        phone: "9685438381",
        professionalProfile: "hello dosto me hu ek saada sa engineer meko please job dedo me bohot mehnati hu isiliye mujhe job chahiye toh please dedo yr me jaan laga dunga, bologe toh me haath per bhi daba dunga lekin please job pe lelo yr aisa mt kro lelo me ye bakwas isiliye likh rha hu kyuki lorem ipsum ho nhi rha toh aise hi likhna padh rha h pr ab kya hi kr skte h i think ho gye kaafi words, chalo ab baadme milte h!",
        professionalExperience: [
            {
                company: "Company A",
                position: "Software Engineer",
                location: "Mumbai, India",
                date: "Jan 2022 - Present",
                learnings: [
                    "Developed and maintained web applications using React.js",
                    "Worked on database optimization and performance tuning",
                    "Collaborated with a cross-functional team to improve system efficiency"
                ]
            }
        ],
        projects: [
            {
                name: "Dynamic Resume Builder",
                description: "A web application that allows users to create and customize their resumes dynamically.",
                technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
                contributions: [
                    "Designed and implemented the frontend using React.js and modular CSS.",
                    "Built a RESTful API with Express.js and MongoDB for data storage.",
                    "Integrated user authentication and session management."
                ]
            },
            {
                name: "Grievance Management System",
                description: "An online portal where students can file grievances and track their status.",
                technologies: ["React.js", "Firebase", "Tailwind CSS"],
                contributions: [
                    "Developed the frontend UI with responsive design using Tailwind CSS.",
                    "Implemented Firebase authentication and real-time database integration.",
                    "Optimized API calls to enhance performance and reduce load time."
                ]
            }
        ]
    });

    return <Template1 userData={userData} />;
};

export default ResumePage;
