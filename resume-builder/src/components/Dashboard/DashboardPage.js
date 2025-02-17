import AfterNav from "./AfterNav"
import styles from "./DashboardPage.module.css";
import Resume_image from "../../assets/Resume_image.jpeg";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className={styles.mainPage}>
        <AfterNav />
        <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
                <h1>"Your career starts with a great Resume"</h1>
                <p>Build | Impress | Get Hired</p>
                <NavLink to="/chooseTemplate">
                <button className={styles.createResumeButton}>Create Resume</button>
                </NavLink>
            </div>
            <div className={styles.imageContainer}>
                    <img src={Resume_image} className={styles.displayImage} ></img>
            </div>         
        </div>
        </div>
    )
}

export default Dashboard;