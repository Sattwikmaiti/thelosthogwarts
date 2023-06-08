import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/2.png"
import submit from "../images/submit.png"
import Cursor from './Cursor';
import Design from "./Design.js"
import Header from "../components/Header.js"

const Question2 = () => {

  
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
    {  console.log(inputref.current.value==="GOLDENSNITCH")
        if(inputref.current.value==="GOLDENSNITCH")
        {update(localStorage.getItem("email"))
       
        
          navigate('/pages/3');
      
          new Audio(song).play()

    
    
    
    }
        inputref.current.value=' ';
       


    }

  
  return (
    <div>
      <Header />
<Cursor />
<div className="question1 "  >
        <div className="question-1">
         <Design/>
          </div>
          <div className="prompt"  >
            <div className="div" >
            <h2>
            Albus Dumbledore assumed that Harry Potter would need the Resurrection Stone set into Marvolo Gaunt's ring at some point in his quest to destroy Voldemort's Horcruxes. He also assumed that Harry would be tempted by the stone if he was able to access it before he was fully ready to accept that he would have to let Voldemort attempt to kill him
            
            This gift will  not be touched by bare skin before it is released, not even by the maker, who wears gloves. It carries an enchantment by which it can identify the first human to lay hands upon it, in the case of disputed capture..What is it?
             <br />
            

            </h2>

            </div>
            <center>

            <div className="div2">
         {progress===1 ? (<><input type="text" ref={inputref} />
            <div className="submit" onClick={onClick}>Submit</div></>):("SOLVED QUESTION")}   
            </div>
        

            </center>
           

          </div>

          <div className="puzzle1">
            <div>2</div>
            <img src={puzz1} />
          </div>
        </div>
        
     

      
    </div>
  )
}

export default Question2
