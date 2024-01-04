import React from "react";
import Personal from "./Personal";
import Header from "./Header";
import Gradient from "./Gradient";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Resume from "./Resume";
import styles from '../App.module.css'

const resumeScreen = (loadSampleCV, handlePrint, downloadPDF, values, getColor1, getColor2,handleFile, 
addExperienceHandler, handleExperience, deleteExperience, componentRef, pdfRef,  addInput, handleDynamicInputs, input, handleSkill, skills, addSkills, deleteSkills, handleChange, stuff2, addExperience, image) => {
 return(
    <div className= {styles.App}>
    <div className={styles.fields}>
         <Header
             loadCV={loadSampleCV}
             handlePrint={handlePrint}
             PDF={downloadPDF} />
         <Gradient
             values={values}
             getColor1={getColor1}
             getColor2={getColor2} />
         <Personal
             values={values}
             setValue={handleChange}
             handleFile={handleFile} />

         <Experience
             values={values}
             setValue={addExperienceHandler}
             stuff2={stuff2}
             setValue2={handleExperience}
             deleteExperience={deleteExperience} />
         <Education
             values={values}
             setValue={addExperienceHandler}
             setValue2={addExperience}
             handleChange={handleChange} />
         <Skills
             values={values}
             addStuff={addInput}
             change={handleChange}
             dynamic={handleDynamicInputs}
             input={input}
             handleSkills={handleSkill}
             skills={skills}
             addSkills2={addSkills}
             deleteSkills={deleteSkills} />
         <Contacts
             change={handleChange}
             values={values} />
     </div><div className={styles.Resume}>
             <Resume
                 values={values}
                 stuff2={stuff2}
                 addInput={addInput}
                 experiences={addExperience}
                 input={input}
                 image={image}
                 reference={componentRef}
                 PDF={pdfRef} />
         </div></div>
 )
}

export default resumeScreen