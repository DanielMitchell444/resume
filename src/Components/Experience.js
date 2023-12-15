
import { useState } from "react";
import styles from '../App.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Experience = ({setValue, values2, setValues, setValue2, values, deleteExperience}) => {
 
  const [stuff, setStuff] = useState(true);
  return (
    <div className= {styles.experience}>
        <h2 className="heading">
            Work Experience
        </h2>
        {
          values.experience.map((experience,index) =>(
            <div className= {styles.experienceRow} key={experience.id}>
              {values.experience.length > 1  &&
                <div className="subHeading">
                    <h3>Experience {index+1}</h3>
                    <FontAwesomeIcon icon={faTrashCan} size="xl" onClick = {() => deleteExperience(experience.id) } className="icon"/>
                </div>
}

                <input 
                    type="text" 
                    placeholder="Position" 
                    maxLength={38}
                    name = "position"
                    value={experience.position}
                    onChange={(e)=>setValue2(e, experience.id)}/>
                <input 
                    type="text" 
                    placeholder="Company" 
                    maxLength={30}
                    name="company"
                    value={experience.company}
                    onChange={(e)=> setValue2(e, experience.id)}/>
                <input 
                    type="text" 
                    placeholder="Start date of employment" 
                    maxLength={12}
                    name="startDate"
                    value={experience.startDate}
                    onChange={(e)=> setValue2(e, experience.id)}/>
                <input 
                    type="text" 
                    placeholder="End date of employment" 
                    maxLength={12}
                    name="endDate"
                    value={experience.endDate}
                    onChange={(e)=> setValue2(e, experience.id)}/>
                <textarea 
                    placeholder="Your main occupation, daily tasks and work field" 
                    maxLength={400} 
                    cols="30" 
                    rows="6"
                    name="responsibilities"
                    value={experience.responsibilities}
                    onChange={(e)=>setValue2(e, experience.id)}/>
            </div>
          ))
        }
        {
          values.experience.length < 2 &&
          <button className= {styles.addBtn} onClick={setValue} >
                <FontAwesomeIcon icon={faPlus} size="xl" className="iconNotClickable AddSymbol"/>
          </button>   
        } 
    </div>
  )
}

export default Experience;