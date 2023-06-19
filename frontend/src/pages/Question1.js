import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/1.png"
import submit from "../images/submit.png"
import Cursor from './Cursor';
import gl from "../images/gli.gif"
import Design from "./Design.js"
import Header from "../components/Header.js"
const Question1 = () => {

  const [progress,setprogress]=useState(0)
   
    
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
    {  console.log(inputref.current.value)
        if(inputref.current.value==="EXPECTOPATRONUM")
        {update(localStorage.getItem("email"))
       
        
          navigate('/pages/2');
      
          new Audio(song).play()

    
    
    
    }
        inputref.current.value=' WRONG ANSWER ';
       


    }

  
  return (
    <div>
      
<Header />
<div className="question1 "  >
<Cursor />
 
        <div className="question-1">
        <Design />
          </div>
          <div className="prompt"  >
            <div className="div" >
            <h2>
              
           1)  Dumbledore : 
'Stay here.' He raised his wand into the air and pointed it in the direction of Hagrid's cabin. Harry saw something silvery dart out of it and streak away through the trees like a ghostly bird .Phoenix , Come and Show my Student Harry ,some Magic !!
             <br />
             Harry Potter: Sir , Do i Have a Phoenix too? 
             <br />
             Dumbledore: No , Harry .You Own ur Father`s Guardian . Do want to see it ? Lets Call him .. 
             This spell will help you against the Prisoner of Azkaban too.
             
            </h2>
            </div>
            <center>

            <div className="div2">
{
  progress===0 ? ( <><input type="text" ref={inputref} />
  <div className="submit" onClick={onClick}>Submit</div> </>):("SOLVED QUESTION")
}
           
            </div>
        

            </center>
           

          </div>

          <div className="puzzle1">
            <div>1</div>
            <img src={puzz1} />
          </div>
        </div>
        
     

      
    </div>
  )
}

export default Question1
