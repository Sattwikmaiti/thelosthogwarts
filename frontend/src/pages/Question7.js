import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/6.png"
import Cursor from './Cursor';

import Header from "../components/Header.js"
const Question6 = () => {

  
  const update = async(id)=>

  {
  
    
     await fetch(`http://localhost:3030/register/update/` + id, {
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
    const [option,setOptions]=useState([{
      id:1,
      value:0,
    },
    {
      id:2,
      value:0,
    },
    {
      id:3,
      value:0,
    }
    ,
    {
      id:4,
      value:0,
    }
  ]);
    const onClick = ()=>
    {  
        let val=inputref.current.value;
        if(val==="MARAUDERSMAP" || val==="MARAUDER'SMAP")
        {update(localStorage.getItem("email"))
        navigate('/pages/7');
        
          
      
          new Audio(song).play()

    
    
    
    }
    inputref.current.value=""
       

    }



  return (
    <>
   <Header   />
<div className="question1 question2"  >
  
    <div className="di1 d1" >
  Messrs. Moony,
  </div> 
  
  <div className="di1 d2" style={{marginTop:'3rem',}}>
  Wormtail,Padfoot and Prongs
 
  
  </div> 
  
    
  
<div className="di1 d3">
Purveyors of Aids
</div>
<div className="di1 d4">
to Magical Mischief-Makers
</div>
    

   
           <Cursor />
    
          <div className="prompt"  >

            
            <center>

            <div className="div2">
            <input type="text" ref={inputref} placeholder="Avarakadabra ..Who am I?"/>
<div className="submit" onClick={onClick}>Submit</div>
            </div>
        

            </center>
            <div className="puzzle1">
            <div>6</div>
            <img src={puzz1} />
          </div>

          </div>

          
        </div>
        
     
        </>
      
  )
}

export default Question6
