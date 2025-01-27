import styles from './Navbar.module.css';
import { NavLink, useNavigate, useLocation  } from 'react-router-dom';

export default function Navbar({scrollToTop , scrollToAbout, scrollToDeveloper}) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleHomeClick = () => {
      if(location.pathname === '/') {
        scrollToTop();
      } 
      else {
        navigate("/");
      }
    }

    const handleAboutClick = () => {
      if(location.pathname === '/') {
        scrollToAbout();
      }
      else {
        navigate("/");
      }
    }
    
    const handleDeveloperClick = () => {
      if(location.pathname === '/') {
        scrollToDeveloper();
      }
      else {
        navigate("/");
      }
    }

    return (
    <nav className={styles.navbar}>
        <div className={styles.logo} onClick={handleHomeClick} >Resume Builder</div>
        <ul className={styles.navLinks}>
          <li><a onClick={handleHomeClick}>Home</a></li>
          <li><a onClick={handleAboutClick}>About</a></li>
          <li><a onClick={handleDeveloperClick}>Developers</a></li>
        </ul>
    </nav>
    )
}