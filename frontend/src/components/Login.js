import React from 'react'
import "./styles.css"
import GoogleIcon from '@mui/icons-material/Google';
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {auth,provider}  from "./Config.js"
import {signInWithPopup,onAuthStateChanged} from "firebase/auth"
import Cursor from "../pages/Cursor.js"
import Rule from "../pages/Rule.js"
const Login = () => {
    const navigate = useNavigate();
    
const [data,setData]=useState(null);
const [user,setUser]=useState(null)

useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user)
    {
      setUser(user);
    }
    else setUser(null);
  })
})


    const handleClick =  ()=>{
     
      alert("clicked")
      signInWithPopup(auth,provider).then(
       async (user)=>{
            localStorage.setItem("user",JSON.stringify(user))
            console.log(user.user.displayName)
            console.log(user.user.email)
            localStorage.setItem("email",user.user.email)
            try {

              const datas = await fetch("http://localhost:3030/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: user.user.displayName, // Replace with the actual values you want to send
                  email: user.user.email,
                  score: 0,
                  
                  
                 
                }),
              }).then((res) => {res.json() ; console.log(datas)});
          
             // Log the response data (the newly created user)
              // Handle any further logic or state updates based on the response
            } catch (error) {
              console.error(error); // Log any errors
              // Handle any error-related logic or display error messages
            }
            navigate('/rule')
         
        }
    ).catch((e)=>console.log()) 
    
    
       
    }
  
  
  return (
    <div> 
        <Cursor />
    {
      localStorage.getItem("email")===null ? (
        <div className="login">

         <center className="logoname">
          THE LOST HOGWART'S
         </center>
         <center className="logos">
          <div className="p1">
          <GoogleIcon sx={{fontSize:'100px' ,}} onClick={handleClick} className="logo"/>
          </div>
        
        <div>Login with Google</div>
        </center> </div>
      ) : (
<Rule />
      )
    }
     
      
      
    </div>
  )
}

export default Login
