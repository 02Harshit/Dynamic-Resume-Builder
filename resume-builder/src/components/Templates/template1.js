import styles from "./template1.module.css";
import { FaPhone } from "react-icons/fa";

const PhoneIcon = () => <FaPhone style={{marginLeft:"10px",color:"orange",fontSize:"18px"}} className="text-blue-500 " />;



const Template1 = () => {
    return (
    <div className={styles.mainContainer}>
        <div className={styles.resume_container}>
            <div className={styles.topContainer}>
                <div>
                <center><span className={styles.name}>ANJALI PAWAR</span></center>
                <center><span className={styles.position}>SOFTWARE TRAINEE</span></center>
                </div> 
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.leftContainer}>
                    <span >9685438381</span><PhoneIcon />
                </div>
                <div className={styles.rightContainer}></div>
            </div>
        </div>
    </div>
    )
}

export default Template1;