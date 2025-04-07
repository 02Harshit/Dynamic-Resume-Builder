import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import Template1 from "./Templates/template1"; // or Template2, based on your flow
import Test from "./test"; // Import your test component
import html2canvas from "html2canvas"; // Import html2canvas for capturing the component
import jsPDF from "jspdf"; // Import jsPDF for generating PDF

const DownloadResume = () => {
    const [resumeData, setResumeData] = useState(null);
    const resumeRef = useRef(null);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get(`http://localhost:5000/api/resumes/my-resume`, {
                    headers: {
                        Authorization: token,
                    }
                });
                setResumeData(response.data);
                console.log("Resume Data:", response.data); // Debugging check
            } catch (error) {
                console.error("Error fetching resume:", error.response?.data?.message || error.message);
                setResumeData(null);
            }
        };

        fetchResume();
    }, []);

    useEffect(() => {
        // Debug after the component renders to ensure ref is attached
        console.log("Ref after render:", resumeRef.current);
    }, [resumeData]);
    
    const handlePrint =async () => {
        const element  = resumeRef.current;
        if (!element) return;

        const canvas = await html2canvas(element); 
        const data = canvas.toDataURL("image/png"); // Convert to image data URL

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: 'a4',
        });

        pdf.addImage(data, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save("resume.pdf"); // Save the PDF with a name

    }

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Download Your Resume</h2>

            
                {resumeData ? (
                    <div ref={resumeRef} style={{ border: "1px solid #ccc", padding: "20px", width: "100%",minHeight: "100px", margin: "auto" }}>
                        <Template1 formData={resumeData} />  
                    </div>    
                    ) : (
                        <p>Loading resume...</p>
                    )}
            

            <button
                onClick={handlePrint}
                style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer", textAlign: "center", display: "block", marginLeft: "auto", marginRight: "auto" }}
            >
                Download as PDF
            </button>
        </div>
    );
};

export default DownloadResume;




