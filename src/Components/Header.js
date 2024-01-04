import React from "react";
import styles from '../App.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faUserPen} from "@fortawesome/free-solid-svg-icons"
const Header = ({loadCV, handlePrint, PDF}) => {
 return(
 <div className= {styles.container}>
  <div className= {styles.header}>
  <div className= {styles.buttons}>
  <h1>Resume Builder</h1>
  <FontAwesomeIcon onClick={handlePrint} icon={faFilePdf} size="xl" className="icon" />
          <FontAwesomeIcon onClick={loadCV} icon={faUserPen} size="xl" className="icon" />
          <button 
          onClick = {PDF}
          >Download PDF</button>
  </div>
   <div className= {styles.created}>
    <h1>Created By Daniel Mitchell</h1>
   </div>
  </div>
 </div>
 )
}

export default Header