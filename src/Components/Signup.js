import React, { useState } from "react";
import styles from '../src/App.module.css'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 return(
 <div>
    <div className= {styles.container2}>
 <div className= {styles.holder}>
  <div className= {styles.form}> 
   <div className= {styles.topForm}>
    <h1>Resume Builder</h1>
   </div>
   <div className= {styles.inputs}>
    <input type = "text" placeholder="Enter your Email"
    onChange = {(e) => setEmail(e.target.value)}
    ></input>
    <input type = "text" placeholder="Enter your Password"
    onChange={(e) => setPassword(e.target.value)}
    ></input>
   </div>
   <div className= {styles.buttons}>
 <button>Login</button>
 <button>Sign Up</button>
 <button>Sign In With Google</button>
  </div>
 </div>
 </div>
 </div>
 </div>
 )
}

export default Signup;