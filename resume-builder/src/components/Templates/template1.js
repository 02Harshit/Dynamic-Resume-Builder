import styles from "./template1.module.css";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const PhoneIcon = () => <FaPhone style={{marginLeft:"10px",color:"orange",fontSize:"15px"}} className="text-blue-500 " />;
const EMailIcon = () => <FaEnvelope style={{marginLeft:"10px",color:"orange",fontSize:"15px"}} className="text-blue-500 " />;



const Template1 = ({ userData }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.resume_container}>
                <div className={styles.topContainer}>
                    <div>
                        <center><span className={styles.name}>{userData.name}</span></center>
                        <center><span className={styles.position}>{userData.position}</span></center>
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <div className={styles.leftContainer}>
                        <span>{userData.phone}</span><PhoneIcon />
                    </div>
                    <div className={styles.rightContainer}></div>
                </div>
            </div>
        </div>
    );
};

export default Template1;
