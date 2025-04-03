import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const DownloadResume = () => {
    const { userId } = useParams(); // Get userId from URL params
    const [resumeData, setResumeData] = useState(null);
    const resumeRef = useRef(); // Ref for the printable section

    // Fetch resume data
    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/resumes/${userId}`);
                const data = await response.json();
                setResumeData(data);
            } catch (error) {
                console.error("Error fetching resume:", error);
            }
        };

        if (userId) {
            fetchResume();
        }
    }, [userId]);

    // Print/Download Resume
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
        documentTitle: "Resume",
    });

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Download Your Resume</h2>

            {resumeData ? (
                <div ref={resumeRef} style={{ border: "1px solid #ccc", padding: "20px", width: "50%", margin: "auto" }}>
                    <h3>{resumeData.resumeData.name}</h3>
                    <p><strong>Position:</strong> {resumeData.resumeData.position}</p>
                    <p><strong>Email:</strong> {resumeData.resumeData.email}</p>
                    <p><strong>Phone:</strong> {resumeData.resumeData.phone}</p>
                    <p><strong>LinkedIn:</strong> {resumeData.resumeData.linkedin}</p>
                    <p><strong>Address:</strong> {resumeData.resumeData.address}</p>
                    
                    <h4>Education</h4>
                    <ul>
                        {resumeData.resumeData.education.map((edu, index) => (
                            <li key={index}>{edu}</li>
                        ))}
                    </ul>

                    <h4>Skills</h4>
                    <ul>
                        {resumeData.resumeData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading resume...</p>
            )}

            <button 
                onClick={handlePrint} 
                style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
                Download as PDF
            </button>
        </div>
    );
};

export default DownloadResume;
