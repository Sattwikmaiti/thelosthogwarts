

import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/9.png"
import submit from "../images/submit.png"
import Cursor from './Cursor';
import Design from "./Design.js"
import Header from "../components/Header.js"
const Question6 = () => {

    
  const [progress,setprogress]=useState(1)
   
    
  useEffect(() => {
    getLeader();
    console.log(progress)
  }, [progress]);
const getLeader = async ()=>{
  const response =await fetch(`https://thelosthogwarts.onrender.com/register/${localStorage.getItem("email")}`);
  const data=await response.json();
  
 
  setprogress(data.progress);
}
  
  const update = async(id)=>

  {
  
    
     await fetch(`https://thelosthogwarts.onrender.com/register/update/` + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // the updated text
        
      }),
    }).then((res) => {res.json();
    
      
    

    }).catch((err)=>console.log(err));
    
  
    
  
  }
    const navigate = useNavigate();
    const inputref=useRef(null);
    const onClick = ()=>
    {  console.log(inputref.current.value==="GOLDENSNITCH")
        if(inputref.current.value==="EXPELLIARMUS")
        {update(localStorage.getItem("email"))
       
        
          navigate('/pages/6');
      
          new Audio(song).play()

    
    
    
    }  inputref.current.value=' WRONG ANSWER ';
       


    }

  
  return (
    <div>
      <Header />
<Cursor />
<div className="question1 "  >
        <div className="question-1">
         <Design />
          </div>
          <div className="prompt"  >
            <div className="div" >
            <h3>
      5)  The spell which defeated Voldemort ,against his AVARA KADABRA. Harry potter's Favourite spell, taught by Professor Snape. 
</h3>

            </div>
            <center>

            <div className="div2">
           {progress===4 && (<><input type="text" ref={inputref} />
<div className="submit" onClick={onClick}>Submit</div></>)} 
            </div>
        

            </center>
           

          </div>

          <div className="puzzle1">
            <div>9</div>
            <img src={puzz1} />
          </div>
        </div>
        
     

      
    </div>
  )
}

export default Question6
