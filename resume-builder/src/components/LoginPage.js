import styles from './LoginPage.module.css';
import Navbar from './Navbar';
import Login from './login';

export default function LoginPage() {
    return (        
    <div className={styles.loginPage}>
        <Navbar />
        <Login />
    </div>
    )
} 