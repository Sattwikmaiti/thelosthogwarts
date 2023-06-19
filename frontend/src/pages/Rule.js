import React from 'react'
import "./styles.css"

import { useNavigate } from "react-router-dom";
import Cursor from './Cursor';


const Rule = () => {
  const navigate = useNavigate();
    
 
    
  return (
    <div>
       
       <div className="rules">
        <Cursor />
           <center className="Rules"><img src="https://see.fontimg.com/api/renderfont4/EaGOl/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRUFEREREIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UlVMRUJPT0s/wolfpack-halloweed.png" /></center>
      <div className="date">
           DATE :20TH JUNE FROM 10AM MORNING 
      </div>
           <ul className="rule">
           <li>
              IMPORTANT: Please take a picture of the puzzle picture given for each question,as later on you need to reassemble the puzzle.So before solving a question ,Take the picture .
            </li>
            <li>
            IMPORTANT:
              The answer to every question must be in "ALL CAPITAL" and all the words must be co-joined.
              For example, if answer is "Severus Snape",You must write "SEVERUSSNAPE".
            </li>
            <li>
              IMPORTANT:
              DONOT INCLUDE any apostrophe in your answer.For example,if answer is "Harry's owl",you must write "HARRYSOWL".
            </li>
            <li>
              Use your Googling skills ,at the fullest ,as most of the questions will be from easy to medium and intresting .Some will be direct too.
            </li>
            <li>
              There will be 9 questions , and each will have a puzzle piece . Each question has 10 points and finally you need to put the correct puzzle number at the end. 

            </li>
            
            <li>
              Hints to each question ,will be released ,after some time ..for each question,in the Hints Section .
              
            </li>
            <li>
              Please register in laptop/pc , the website will not work /display properly on mobile phones ,due to non responsiveness.
            </li>
           <li>
              If you feel too tired of searching the answer in the internet,you  can close the game and come back after sometime. It will resume where you stopped.
            </li>
            <li>
              As we are not using a paid server/domain , so the website might be slow at some points , so please refresh the page ..after every new question.
            </li>
           
          
           </ul>
         <div className="buttonrule">

         
        <button onClick={async()=>
        { 

         
            const response =await fetch(`https://thelosthogwarts.onrender.com/register/${localStorage.getItem("email")}`);
            const data=await response.json();
            
            navigate(`/pages/${data.progress+1}`)
            //navigate('/rule')
          

        }} > Go To Questions
        
        </button>
        </div>
        </div>
    </div>
  )
}

export default Rule
