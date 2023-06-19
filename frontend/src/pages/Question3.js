



import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/8.png"
import submit from "../images/submit.png"
import Cursor from './Cursor';
import gl from "../images/gli.gif"
import Header from "../components/Header.js"
const Question3 = () => {

  const [progress,setprogress]=useState(2)
   
    
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
        if(inputref.current.value==="SEVERUSSNAPE")
        {update(localStorage.getItem("email"))
       
        
          navigate('/pages/4');
      
          new Audio(song).play()

    
    
    
    }
    inputref.current.value=' WRONG ANSWER ';
       


    }

  
  return (
    <div>
      <Header />
<Cursor />
<div className="question1 "  >
        <div className="question-1">
          <div className="box">
          <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            <div><img src={gl} /></div>
            
        </div>
          </div>
          <div className="prompt"  >
            <div className="div" >
            <h3>
            I was shown as a evil in my earlier days of Hogwarts but a saint in my last days.
In my death ,My Tears will be a form of memories ,which will tell Harry The truth .
I am not a traitor but to show Voldemort i am ...i killed my master on his orders
</h3>

            </div>
            <center>

            <div className="div2">
            {progress===2 && (<><input type="text" ref={inputref} />
<div className="submit" onClick={onClick}>Submit</div> </>)}
            </div>
        

            </center>
           

          </div>

          <div className="puzzle1">
            <div>8</div>
            <img src={puzz1} />
          </div>
        </div>
        
     

      
    </div>
  )
}

export default Question3
