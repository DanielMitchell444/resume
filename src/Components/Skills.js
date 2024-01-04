import React from "react";
import styles from '../App.module.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Skills = ({addStuff, input, change, dynamic, addSkills2, handleSkills, values, deleteSkills, value}) => {
 return (
    <div className= {styles.skills}>
        <h2 className= {styles.heading}> 
            Skills
        </h2>
        {
            values.skills.map(skill =>(
                <div className= {styles.skillsRow} key={skill.id}>
                    <input 
                        id={skill.id}
                        type="text" 
                        placeholder="Language or Techology"
                        className= {styles.input}
                        value={skill.name}
                        onChange={handleSkills}
                        maxLength={20}/>
                    {values.skills.length > 1 && <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteSkills(skill.id)} size="xl" className= {styles.icon}/> }
                    {console.log(skill.id)}
                </div> 

                ))
        }
        {
            values.skills.length < 12 &&
            <button className= {styles.addBtn} onClick={addSkills2}>
                <FontAwesomeIcon icon={faPlus} size="xl" className="iconNotClickable AddSymbol"/>
            </button>
         }  
    </div>
  )
}
export default Skills
