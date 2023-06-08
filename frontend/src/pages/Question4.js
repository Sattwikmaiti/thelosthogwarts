import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/4.png"
import submit from "../images/submit.png"
import crossword from "../images/crossword.jpeg"
import Cursor from './Cursor';
import gl from "../images/gli.gif"
import Design from "./Design.js"
import Header from "../components/Header.js"
const Question4 = () => {

  
    const [database,setDatabase]=useState([])
    
    useEffect(() => {
      getLeader();
      
    }, [database]);
    const getLeader = async ()=>{
      const response =await fetch(`https://thelosthogwarts.onrender.com/registers`);
      const data=await response.json();
      setDatabase(data);
    }
    database.sort(function(a,b){
      if(a.score>b.score)return -1;
      else return 1;
    })
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
    {  console.log(inputref.current.value==="EXPECTOPATRONUM")
        if(inputref.current.value==="IAMLORDVOLDEMORT" || inputref.current.value==="VOLDEMORT" )
        {update(localStorage.getItem("email"))
       
        
          navigate('/pages/5');
      
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
          <Design />
          </div>
          <div className="prompt"  >
            <div className="div" >
            <img src={crossword}  style={{height:'14rem',width:'14rem'}}/>
            <h2>
              FIND THE THREE WORDS AND SAY WHO AM I??
              Clues:
              <br />
              <li>
              I AM A FAMOUS CARTOON NETWORK CHARACTER ( \ ).
              </li>
              <li>
              DESCENDENT OF PURE BLOOD SALAZAR SLYTHERIN ( | )
              </li>
              <li>
             PEOPLE SOLVE ME IN THERE FREE TIME ( / ).
              </li>
            </h2>
            </div>
            <center>

            <div className="div2">
            <input type="text" ref={inputref} />
<div className="submit" onClick={onClick}>Submit</div>
            </div>
        

            </center>
           

          </div>

          <div className="puzzle1">
            <div>4</div>
            <img src={puzz1} />
          </div>
        </div>
        
     

      
    </div>
  )
}

export default Question4
