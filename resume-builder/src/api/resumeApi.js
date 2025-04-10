// src/api/resumeApi.js
import axios from "axios";

const API_BASE_URL = "https://resume-backend-br40.onrender.com/api/resumes";

// Save resume (used in ResumeForm1 style)
export const saveResume = async (formData) => {
    try {
        const user = JSON.parse(localStorage.getItem("user")); // Get user object
        const userId = user ? user.id : null; // Extract user ID

        console.log("Extracted userId:", userId); // Debugging check

        if (!userId) {
            alert("User ID not found. Please log in again.");
            return;
        }

        const resumeData = formData; // Use form data

        const response = await axios.post(
            "https://resume-backend-br40.onrender.com/api/resumes/save",
            { userId, resumeData }, 
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // If using JWT
                },
            }
        );

        if (response.data.success) {
            navigate(`/download`);
        } else {
            alert("Failed to save resume");
        }
    } catch (error) {
        console.error("Error saving resume:", error);
        alert("An error occurred while saving the resume.");
    }
};
