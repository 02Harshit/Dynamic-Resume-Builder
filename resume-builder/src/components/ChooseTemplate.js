import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChooseTemplate.module.css";
import template1Img from "../assets/Resume_image.jpeg";
import template2Img from "../assets/Resume_image.jpeg";

const ChooseTemplate = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    navigate(`/resumeForm?template=${template}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Choose a Resume Template</h1>
      <div className={styles.templates}>
        <div
          className={styles.templateCard}
          onClick={() => handleTemplateSelect("template1")}
        >
          <img src={template1Img} alt="Template 1" className={styles.templateImage} />
          <p className={styles.templateName}>Template 1</p>
        </div>
        <div
          className={styles.templateCard}
          onClick={() => handleTemplateSelect("template2")}
        >
          <img src={template2Img} alt="Template 2" className={styles.templateImage} />
          <p className={styles.templateName}>Template 2</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;
