import Navbar from "../Navbar"
import AuthForm from "./AuthForm";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.formContainer}><AuthForm /></div>
        </div>
    )
}

export default AuthPage;