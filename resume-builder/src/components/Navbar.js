import styles from './Navbar.module.css';

export default function() {
    return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>Resume Builder</div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#developer">Developers</a></li>
        </ul>
    </nav>
    )
}