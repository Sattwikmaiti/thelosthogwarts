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
           <center className="Rules">RULE BOOK</center>

           <ul className="rule">
           <li>
              If you feel too tired of searching the answer in the internet,you  can close the game and come back after sometime. It will resume where you stopped.
            </li>
            <li>
              IMPORTANT: Please take a picture of the puzzle picture given for each question,as later on you need to reassemble the puzzle.So before solving a question ,Take the picture .
            </li>
            <li>
              The answer to every question must be in "ALL CAPITAL" and all the words must be co-joined.
              For example, if answer is "Severus Snape",You must write "SEVERUSSNAPE".
            </li>
            <li>
              DONOT INCLUDE any apostrophe in your answer.For example,if answer is "Harry's owl",you must write "HARRYSOWL".
            </li>
          
           </ul>
         <div className="buttonrule">

         
        <button onClick={async()=>
        { 

         
            const response =await fetch(`http://localhost:3030/register/${localStorage.getItem("email")}`);
            const data=await response.json();
            
            navigate(`/pages/${data.progress+1}`)
          

        }} > Go To Questions
        
        </button>
        </div>
        </div>
    </div>
  )
}

export default Rule
