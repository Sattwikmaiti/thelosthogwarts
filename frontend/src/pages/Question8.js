import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";

import song from "../images/song.mp3"
import "./styles.css"

import puzz1 from "../images/7.png"
import laxmi from "../images/lakshmi.jpg"
import hagrid from "../images/hagrid.jpg"
import snow from "../images/snow.jpg"
import Design from "./Design.js"
import Header from "../components/Header.js"
import Cursor from './Cursor';

const Question8 = () => {

     
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
        if(inputref.current.value==="HEDWIG")
        {update(localStorage.getItem("email"))
       
        
          navigate('/pages/8');
      
          new Audio(song).play()

    
    
    
    }
        inputref.current.value=' ';
       


    }

  
  return (
    <div>
      <Header />
      <Cursor />
      <Design />

<div className="question1 "  >
        <div className="question-1">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
        </div>
          </div>
          <div className="prompt"  >
            <div className="div " >
               <h3>Find a link between the images and tell who am I ? </h3>
<div className="im">
                <div className="im1">
                    <img src={hagrid} />
                     
                </div>
                <div className="im1">
                    <img src={laxmi} />
                </div>
                <div className="im1">
                    <img src={snow} />
                </div>
                </div>
            </div>
            <center>

            <div className="div2">
           {progress===6 &&  (<><input type="text" ref={inputref} />
<div className="submit" onClick={onClick}>Submit</div> </>)}
            </div>
        

            </center>
           

          </div>

          <div className="puzzle1">
            <div>7</div>
            <img src={puzz1} />
          </div>
        </div>
        
     

      
    </div>
  )
}

export default Question8
