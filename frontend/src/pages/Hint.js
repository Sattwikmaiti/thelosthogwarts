import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
import Cursor from "../pages/Cursor.js"
const Hint = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="hints">
        <Cursor />
        <div className="button" onClick={async()=>
        { 

         
            const response =await fetch(`https://thelosthogwarts.onrender.com/register/${localStorage.getItem("email")}`);
            const data=await response.json();
            console.log(data)
            navigate(`/pages/${data.progress+1}`)
          

        }}
        
        style={{padding:'1rem',backgroundColor:'black'}}
        >
          <h1>Back To Progress(More Hints to come)</h1>
        </div> 
        <div className="hint">
                  <div className="question">
                      Question 1
                  </div>
                  <div className="sol">
                    Give attention to how is phoenix related to Dumbledore.Find the same for Harry potter . The solve the question (Your EX will give you a PEC of TOrtila )
                  </div>
                   
                 </div>
                 

                 <div className="hint">
                  <div className="question">
                      Question 2
                  </div>
                  <div className="sol">
                    Win The QuadBall game -_- 
                  </div>
                   
                 </div>

                 
                 
              
                  
                 
                 
      </div>
      
      
    </div>
  )
}

export default Hint
