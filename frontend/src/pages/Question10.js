import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/5.png"
import submit from "../images/submit.png"
import reverse from "../images/lsitencarefullymusic.mp3"
import ReactAudioPlayer from 'react-audio-player';
import Cursor from './Cursor';
import Design from "./Design.js"
import Header from "../components/Header.js"
const Question10 = () => {
   
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
        if(inputref.current.value==="PRIORIINCANTATEM")
        {update(localStorage.getItem("email"))
        navigate('/pages/10');
        
          
      
          new Audio(song).play()

    
    
    
    }
        
       

    }



  return (
   
<div className="question1 "  >
  <Header />
  <Cursor />
  <Design />
        <div className="question-1">
          
          </div>
          
          <div className="prompt"  >
          <div className="alert" style={{backgroundColor:'bisque',color:'red',padding:'0.2rem'}}>
           ! If your browser does not support the audio , download it or play in firefox
          </div>
            <div className="div" >
            <ReactAudioPlayer
  src={reverse}
  autoPlay={false}
  muted={true}
  controls
  
  
/> 
<h3> i am the spell due to which these voices you hear ,if you can catch it,you will crack it or you will  hear it Back!!!</h3>
       
                         
            </div>
            <center>

            <div className="div2">
           {progress===8 && (<><input type="text" ref={inputref} />
<div className="submit" onClick={onClick}>Submit</div></>)} 
            </div>
        

            </center>
           

          </div>

          <div className="puzzle1">
            <div>5</div>
            <img src={puzz1} />
          </div>
        </div>
        
     

      
  )
}

export default Question10



