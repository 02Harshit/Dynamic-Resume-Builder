import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const MyResumes = () => {
    const [resumes, setResumes] = useState([]);
    const history = useHistory();

    // Fetch resumes when the component mounts
    useEffect(() => {
        axios.get('/api/resumes/all', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
                setResumes(response.data); // Assuming the response is an array of resumes
            })
            .catch(error => {
                console.error('Error fetching resumes:', error);
            });
    }, []);

    // Handle "Update Resume" click
    const handleUpdate = (resume) => {
        // Redirect to template-specific form based on the resume's template
        if (resume.template === "template1") {
            history.push({
                pathname: `/resumeForm1`,
                state: { resume }  // Pass the resume data (or ID and template) via state
            });
        } else if (resume.template === "template2") {
            history.push({
                pathname: `/resumeForm2`,
                state: { resume }  // Pass the resume data (or ID and template) via state
            });
        }
    };
    

    // Handle "View/Download Resume" click
    const handleViewDownload = (resumeId) => {
        history.push(`/download/${resumeId}`); // Redirect to the download page with the resumeId
    };

    return (
        <div className="my-resumes-container">
            <h1>My Resumes</h1>
            <div className="resume-list">
                {resumes.length > 0 ? (
                    resumes.map((resume) => (
                        <div key={resume._id} className="resume-item">
                            <h3>{resume.title}</h3> {/* Display the resume title or any field you want */}
                            <button onClick={() => handleUpdate(resume._id)}>Update</button>
                            <button onClick={() => handleViewDownload(resume._id)}>View/Download</button>
                        </div>
                    ))
                ) : (
                    <p>You have not created any resumes yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyResumes;
