import React from "react";
import styles from '../App.module.css'
import { set } from "mongoose";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
const Education = ({setValue, values, handleChange}) => {
 return(
 <div className= {styles.education}>
  <div className= {styles.heading}>
    <h2>
    Education
    </h2>
  </div>
  <input type = "text" 
  placeholder="School" 
  maxLength={36} 
  name = "school" 
  value = {values.school}
  onChange={handleChange}
  />
  <input type = "text" placeholder="Degree" maxLength={36} name = "degree" 
  onChange={handleChange}
  value = {values.degree}
  />
  </div>
 )
}

export default Education;