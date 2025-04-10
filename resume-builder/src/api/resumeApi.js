// src/api/resumeApi.js
import axios from "axios";

const API_BASE_URL = "https://resume-backend-br40.onrender.com/api/resumes";

// Save resume (used in ResumeForm1 style)
export const saveResume = async (formData) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        if (!user || !token) {
            throw new Error("User not authenticated");
        }

        const response = await axios.post(
            `${API_BASE_URL}/save`,
            {
                userId: user.id,
                resumeData: formData
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("API: Error saving resume", error);
        throw error;
    }
};
