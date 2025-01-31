import { useState, useEffect } from "react";
import Template1 from "./Templates/template1";

const ResumePage = () => {
    const [userData, setUserData] = useState({
        name: "ANJALI PAWAR",
        position: "SOFTWARE TRAINEE",
        phone: "9685438381",
    });

    // useEffect(() => {
    //     // Later, replace this with an API call to fetch user data from backend
    //     fetch("/api/user/resume")
    //         .then((res) => res.json())
    //         .then((data) => setUserData(data))
    //         .catch((err) => console.error("Error fetching data:", err));
    // }, []);

    return ( 
        <Template1 userData={userData} />
    )
};

export default ResumePage;
