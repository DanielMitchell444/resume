import React from "react";
import styles from '../App.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
const Gradient = ({values, getColor1, getColor2}) => {
 return(
 <div className= {styles.gradient}>
  <div className= {styles.heading}>
   <h1>
   <FontAwesomeIcon icon = {faPaintBrush} size = "xl" />
    Gradient
    </h1>
 <div className= {styles.gradientBtn}>
   <label className =  {styles.colorPicker1} for = "color1"
   style = {{background:`${values.color1}`}}
   >
    <input className= {styles.color1} 
    type = "color"
    id = "colorPicker1"
    onChange = {getColor1}
    value = {values.color1}
    
     />
   </label>
   <label className = {styles.colorPicker2} for = "color2" id = "color2"
    style = {{background:`${values.color1}`}}
   >
    <input className= {styles.color2} type = "color"
    onChange = {getColor2}
    value = {values.color2}
     />
   </label>
   </div>
 </div>
 </div>
 )
}

export default Gradient;