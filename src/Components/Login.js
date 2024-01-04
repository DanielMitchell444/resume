
import styles from '../form.module.css'
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const Login = () => {

    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [user, loading, error] = useAuthState(auth)

const navigate = useNavigate();

useEffect(() => {
  if (loading){
    return;
  }
  if(user) navigate('/resume')
}, [user,loading])
 return(
<div className= {styles.container2}>
 <div className= {styles.holder}>
  <div className= {styles.form}> 
   <div className= {styles.topForm}>
    <h1>Resume Builder</h1>
   </div>
   <div className= {styles.inputs}>
    <input type = "text" placeholder="Enter your username"
    onChange={(e) => setEmail(e.target.value)}
    ></input>
    <input type = "text" placeholder="Enter your Password"></input>
   </div>
   <div className= {styles.buttons}>
 <button>Login</button>
 <button>Sign Up</button>
 <button>Sign With Google</button>
  </div>
 </div>
 </div>
 </div>
 )
}

export default Login