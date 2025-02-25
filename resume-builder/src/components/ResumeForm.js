import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ResumeForm.module.css";
import Template1 from "./Templates/template1";
import Template2 from "./Templates/template2";
import Form1 from "./Forms/form1";

const ResumeForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTemplate = queryParams.get("template");

  return (
      <>
      if(selectedTemplate === "template1") {
        <>
        <Form1 />
        <Template1 />
        </>
      }
      </>
  )

}

export default ResumeForm;