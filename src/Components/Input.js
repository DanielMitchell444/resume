import React from "react";
import '../App.module.css'
const Input = () => {
 return(
 <div>
  <input
  type = "text"
  placeholder="Language or Technology"
  maxLength={36}
  name = "skill"
  />
 </div>
 )
}

export default Input;