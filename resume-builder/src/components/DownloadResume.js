// // import React, { useEffect, useRef, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { useReactToPrint } from "react-to-print";

// // const DownloadResume = () => {
// //     const { userId } = useParams(); // Get userId from URL params
// //     const [resumeData, setResumeData] = useState(null);
// //     const resumeRef = useRef(); // Ref for the printable section

// //     // Fetch resume data
// //     useEffect(() => {
// //         const fetchResume = async () => {
// //             try {
// //                 const response = await fetch(`http://localhost:5000/api/resumes/${userId}`);
// //                 const data = await response.json();
// //                 setResumeData(data);
// //             } catch (error) {
// //                 console.error("Error fetching resume:", error);
// //             }
// //         };

// //         if (userId) {
// //             fetchResume();
// //         }
// //     }, [userId]);

// //     // Print/Download Resume
// //     const handlePrint = useReactToPrint({
// //         content: () => resumeRef.current,
// //         documentTitle: "Resume",
// //     });

// //     return (
// //         <div style={{ textAlign: "center", padding: "20px" }}>
// //             <h2>Download Your Resume</h2>

// //             {resumeData ? (
// //                 <div ref={resumeRef} style={{ border: "1px solid #ccc", padding: "20px", width: "50%", margin: "auto" }}>
// //                     <h3>{resumeData.resumeData.name}</h3>
// //                     <p><strong>Position:</strong> {resumeData.resumeData.position}</p>
// //                     <p><strong>Email:</strong> {resumeData.resumeData.email}</p>
// //                     <p><strong>Phone:</strong> {resumeData.resumeData.phone}</p>
// //                     <p><strong>LinkedIn:</strong> {resumeData.resumeData.linkedin}</p>
// //                     <p><strong>Address:</strong> {resumeData.resumeData.address}</p>
                    
// //                     <h4>Education</h4>
// //                     <ul>
// //                         {resumeData.resumeData.education.map((edu, index) => (
// //                             <li key={index}>{edu}</li>
// //                         ))}
// //                     </ul>

// //                     <h4>Skills</h4>
// //                     <ul>
// //                         {resumeData.resumeData.skills.map((skill, index) => (
// //                             <li key={index}>{skill}</li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //             ) : (
// //                 <p>Loading resume...</p>
// //             )}

// //             <button 
// //                 onClick={handlePrint} 
// //                 style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
// //                 Download as PDF
// //             </button>
// //         </div>
// //     );
// // };

// // export default DownloadResume;

// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";

// const DownloadResume = () => {
//     const { userId } = useParams(); // ✅ Using 'userId' from URL params
//     const [resumeData, setResumeData] = useState(null);
//     const resumeRef = useRef(); // ✅ Ref for printable section

//     // Fetch resume data
//     useEffect(() => {
//         const fetchResume = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/api/resumes/${userId}`);
//                 if (!response.ok) throw new Error("Failed to fetch resume"); // ✅ Handles API errors
//                 const data = await response.json();
//                 setResumeData(data);
//             } catch (error) {
//                 console.error("Error fetching resume:", error);
//                 setResumeData(null); // ✅ Ensures resumeData is always defined
//             }
//         };

//         if (userId) {
//             fetchResume();
//         }
//     }, [userId]);

//     // Print/Download Resume
//     const handlePrint = useReactToPrint({
//         content: () => resumeRef.current,
//         documentTitle: "Resume",
//     });

//     return (
//         <div style={{ textAlign: "center", padding: "20px" }}>
//             <h2>Download Your Resume</h2>

//             {resumeData ? (
//                 <div ref={resumeRef} style={{ border: "1px solid #ccc", padding: "20px", width: "50%", margin: "auto" }}>
//                     <h3>{resumeData?.name || "N/A"}</h3>
//                     <p><strong>Position:</strong> {resumeData?.position || "N/A"}</p>
//                     <p><strong>Email:</strong> {resumeData?.email || "N/A"}</p>
//                     <p><strong>Phone:</strong> {resumeData?.phone || "N/A"}</p>
//                     <p><strong>LinkedIn:</strong> {resumeData?.linkedin || "N/A"}</p>
//                     <p><strong>Address:</strong> {resumeData?.address || "N/A"}</p>
                    
//                     <h4>Education</h4>
//                     <ul>
//                         {resumeData?.education && resumeData.education.length > 0 ? (
//                             resumeData.education.map((edu, index) => (
//                                 <li key={index}>{edu}</li>
//                             ))
//                         ) : (
//                             <li>No education details available</li>
//                         )}
//                     </ul>

//                     <h4>Skills</h4>
//                     <ul>
//                         {resumeData?.skills && resumeData.skills.length > 0 ? (
//                             resumeData.skills.map((skill, index) => (
//                                 <li key={index}>{skill}</li>
//                             ))
//                         ) : (
//                             <li>No skills listed</li>
//                         )}
//                     </ul>
//                 </div>
//             ) : (
//                 <p>Loading resume...</p>
//             )}

//             <button 
//                 onClick={handlePrint} 
//                 style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
//                 Download as PDF
//             </button>
//         </div>
//     );
// };

// export default DownloadResume;

// import React, { useEffect, useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";
// import axios from "axios";

// const DownloadResume = () => {
//     const [resumeData, setResumeData] = useState(null);
//     const resumeRef = useRef();

//     useEffect(() => {
//         const fetchResume = async () => {
//             try {
//                 const token = localStorage.getItem('authToken');
//                 console.log("Token:", token); // Debugging check    
//                 const response = await axios.get(`http://localhost:5000/api/resumes/my-resume`, {
//                 headers: {
//                     Authorization: token,
//                 }
//                 });
//                 setResumeData(response.data);
//             } catch (error) {
//                 console.error("Error fetching resume:", error.response?.data?.message || error.message);
//                 setResumeData(null);
//             }
//         };

//         fetchResume(); // ✅ Just call it directly
//     }, []); // ✅ Removed userId from dependencies

//     const handlePrint = useReactToPrint({
//         content: () => resumeRef.current,
//         documentTitle: "Resume",
//     });

//     return (
//         <div style={{ textAlign: "center", padding: "20px" }}>
//             <h2>Download Your Resume</h2>

//             {resumeData ? (
//                 <div ref={resumeRef} style={{ border: "1px solid #ccc", padding: "20px", width: "50%", margin: "auto" }}>
//                     <h3>{resumeData?.name || "N/A"}</h3>
//                     <p><strong>Position:</strong> {resumeData?.position || "N/A"}</p>
//                     <p><strong>Email:</strong> {resumeData?.email || "N/A"}</p>
//                     <p><strong>Phone:</strong> {resumeData?.phone || "N/A"}</p>
//                     <p><strong>LinkedIn:</strong> {resumeData?.linkedin || "N/A"}</p>
//                     <p><strong>Address:</strong> {resumeData?.address || "N/A"}</p>

//                     <h4>Education</h4>
//                     <ul>
//                         {resumeData?.education?.length > 0 ? (
//                             resumeData.education.map((edu, index) => (
//                                 <li key={index}>{edu}</li>
//                             ))
//                         ) : (
//                             <li>No education details available</li>
//                         )}
//                     </ul>

//                     <h4>Skills</h4>
//                     <ul>
//                         {resumeData?.skills?.length > 0 ? (
//                             resumeData.skills.map((skill, index) => (
//                                 <li key={index}>{skill}</li>
//                             ))
//                         ) : (
//                             <li>No skills listed</li>
//                         )}
//                     </ul>
//                 </div>
//             ) : (
//                 <p>Loading resume...</p>
//             )}

//             <button
//                 onClick={handlePrint}
//                 style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
//             >
//                 Download as PDF
//             </button>
//         </div>
//     );
// };

// export default DownloadResume;

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




