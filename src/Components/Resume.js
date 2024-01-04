import React from "react";
import styles from '../App.module.css'
import '../fonts.css'
const Resume = ({values, stuff2, experiences, input, addInput, image, reference}) => {
    return(
     <div className= {styles.ResumePreview} 
     style = {{background:`linear-gradient(to right, ${values.color1}, ${values.color2})`}}
     ref = {reference}
     >
      <div className= {styles.ResumeTop}>
       <div className= {styles.Header}>
        <div className= {styles.HeadTag}>
         <h1>{values.firstName} {values.lastName}</h1>
         <span>{values.title}</span>
        </div>  
        <div className= {styles.imgContainer}>
          <img src = {values.fileSRC} alt = {values.fileName} />
        </div>
      </div>
      <p>{values.description}</p> 
      </div>
      <div className= {styles.ResumeMiddle}>
        <h1>Experience</h1>
      <div className= {styles.experiences}>
        {values.experience.map(item => {
         return(
        <div className= {styles.experienceContainer} key = {item.id} style = {values.experience.length > 1 ? {maxWidth: "320px"}: null}>
        <h3>{item.position}</h3>
        <p>{item.company} | {item.startDate} - {item.endDate}</p>

        <p className= {styles.workDescription}>{item.responsibilities}</p>
      </div>
        )})}
        </div>
        <div className= {styles.educationSkills}>
        <div className= {styles.educationContainer}>
          <h1 className= {styles.head}>Education</h1>
          <h3>{values.school}</h3>
          <p>
          {values.degree}

          </p>
      </div>
         <div className= {styles.skillsContainer}>
          <h1 className= {styles.head}>Skills</h1>
          <div className= {styles.skillGrid}>
          {values.skills.map((skills) => {
            return(
            <p
            className= {styles.list}
            onChange={addInput}
            key = {skills.id}
            >
           {skills.name}
   </p>
  )
 })}
          </div>
         </div>
        </div>
          </div>
          <div className= {styles.BottomSection}>
         <div className= {styles.ColumnContainer}>
          <div className = {styles.sec}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-location-dot" className="svg-inline--fa fa-map-location-dot fa-xl logos" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
          <p>{values.address}</p>
         </div> 
         <div className= {styles.sec}>
         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="svg-inline--fa fa-phone fa-xl logos" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
         <p>{values.phone}</p>
         </div>
         </div>
         <div className= {styles.ColumnContainer}>
          <div className = {styles.sec}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-xl logos" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
          <p>{values.email}</p>
         </div> 
         <div className= {styles.sec}>
         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" className="svg-inline--fa fa-globe fa-xl logos" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg>
         <p>{values.link}</p>
         </div>
         </div>
         </div>
         </div>
    )
}

export default Resume;