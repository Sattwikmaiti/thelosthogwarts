import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/3.png"
import hidden from "../images/hidden.png"
import Cursor from './Cursor';
import Design from "./Design.js"
import Header from "../components/Header.js"
const Question9 = () => {

  
    const [database,setDatabase]=useState([])
    
    const [progress,setprogress]=useState(1)
   
    
    useEffect(() => {
      getLeader();
      
    }, []);
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
    {  console.log(inputref.current.value==="WINGARDIUMLEVIOSA")
        if(inputref.current.value==="WINGARDIUMLEVIOSA")
        {update(localStorage.getItem("email"))
       
        
          navigate('/pages/9');
      
          new Audio(song).play()

    
    
    
    }
        inputref.current.value=' ';
       


    }

  
  return (
    <div>
      <Header />


<div className="question1 question3 "  >
<Cursor />
<Design />
       
          <div className="prompt  "  >
            <div className="div prompt2" >
            <div className="text">
            She tapped the diary three times and said, "Aparecium!" Nothing happened.
            <div className="div2" > 
            {
              progress===7 &&  (<><input type="text" ref={inputref} style={{width:'15rem'}} />
              <button className="submit" onClick={onClick} >Submit</button> </>)
            }
            
            </div>
            </div>
            <div className="image">
              <img src={hidden}  />
            </div>
            
            </div>
            <center>

           
        

            </center>
           

          </div>

          <div className="puzzle1">
            <div>3</div>
            <img src={puzz1} />
          </div>
        </div>
        
     

      
    </div>
  )
}

export default Question9


