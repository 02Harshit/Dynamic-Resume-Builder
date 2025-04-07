import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChooseTemplate.module.css";
import template1Img from "../assets/template1.png";
import template2Img from "../assets/Resume_image.jpeg";
import Footer from "./footer.js";


const ChooseTemplate = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    localStorage.setItem("selectedTemplate", template); // Store selected template
    navigate(template === "template1" ? "/resumeForm1" : "/resumeForm2", {
      state: { selectedTemplate: template }, // Passing as state (optional)
    });
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
      {/* <Footer/> */}
    </div>
  );
};

export default ChooseTemplate;
