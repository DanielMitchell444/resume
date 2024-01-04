import React from "react";
import styles from '../App.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
const Personal = ({values, setValue, selectedImage, handleFile}) => {
 return(
 <div className= {styles.personalDataForm}>
   <h2 className= {styles.heading }>Personal Data</h2>
 <div className= {styles.fullName}>
 <input type = "text" 
 placeholder="First Name" 
 maxLength={15} 
 onChange= {setValue}
 value = {values.firstName}
 name = "firstName"
 />
 <input 
 type = "text" 
 placeholder="Last Name" 
 maxLength={15} 
 onChange={setValue}
 value = {values.lastName}
 name = "lastName"
 />
 </div>
 <input type = "text" 
 placeholder="Niche: Front-End Developer" 
 maxLength={40}
 onChange = {setValue}
 value = {values.title}
 name = "title"
 />
 <label for = "file"
 className= {styles.fileImage}
 >{values.fileName}</label>
 <input 
 type = "file" 
 id = "file" 
 placeholder="Choose Picture" 
 accept="Image/*"
 onChange = {e => handleFile(e)}
 className= {styles.image} 
 {...values.fileName ? values.fileName : "Choose Picture"}
 
 />
 <textarea 
 placeholder= "Tell something about yourself to stand out from other canidates." 
 maxLength={520} 
 cols= "30" 
 rows= "6" 
 onChange={setValue}
 name = "description"
 value = {values.description}
 />
 </div>
 )
}

export default Personal;