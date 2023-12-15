import React from "react";
import styles from '../App.module.css'
const Header = ({loadCV, handlePrint}) => {
 return(
 <div className= {styles.container}>
  <div className= {styles.header}>
  <div className= {styles.buttons}>
  <h1>Resume Builder</h1>
    <button className= {styles.pdf}
    onClick = {handlePrint}
    >PDF</button>
    <button onClick = {loadCV}
    >Autofill</button>
  </div>
   <div className= {styles.created}>
    <h1>Created By Daniel Mitchell</h1>
   </div>
  </div>
 </div>
 )
}

export default Header