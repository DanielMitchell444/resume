import React from "react";
import styles from '../App.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
const Contacts = ({change, values}) => {
 return(
 <div className= {styles.contacts}>
  <div className= {styles.heading}>
    <h2>Contacts</h2>
  </div>
  <input 
  type = "text" 
  placeholder="Address"
  onChange={change} 
  maxLength={36} 
  name = "address" 
  value = {values.address}
  />
  <div className= {styles.fields2}>
    <input type = "text" 
    placeholder="Email"
    onChange={change} 
    maxLength={36} 
    name = "email" 
    value={values.email}
    />
    <input type = "text"
     placeholder="Phone Number"
    onChange = {change}
    maxLength={36} 
    name = "phone" 
    value = {values.phone}
    />
  </div>
  <input type = "text" placeholder="Link to portfolio"
   onChange={change}
   maxLength={36} name = "link" 
   value = {values.link}
   />
 </div>
 )
}

export default Contacts;