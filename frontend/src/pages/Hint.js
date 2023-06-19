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
                    Give attention to how is phoenix related to Dumbledore.Find the same for Harry potter . The solve the question (EXPECTOPATRONUM : SO MANY TRIES...BY PEOPLE SO..ANSWER  )
                  </div>
                   
                 </div>
                 

                 <div className="hint">
                  <div className="question">
                      Question 2
                  </div>
                  <div className="sol">
                    Win The Quidditch game (GOLDENSNITCH)
                  </div>
                   
                 </div>

                 <div className="hint">
                  <div className="question">
                      Question 4
                  </div>
                  <div className="sol">
                    UNSCRAMBLE me 
                  </div>
                   
                 </div>

                 <div className="hint">
                  <div className="question">
                      Question 6
                  </div>
                  <div className="sol">
                    Move your Cursor Slowly on the screen and find out the mistery :)
                  </div>
                   
                 </div>
                 <div className="hint">
                  <div className="question">
                      Question 7
                  </div>
                  <div className="sol">
                    The Laxmi God's pet :)
                  </div>
                   
                 </div>
                 <div className="hint">
                  <div className="question">
                      Question 8
                  </div>
                  <div className="sol">
                    Meaning of Aparacium . Image Decode(Stegonagraphy) to decode :) 
                  </div>
                   
                 </div>
                 <div className="hint">
                  <div className="question">
                      Question 9
                  </div>
                  <div className="sol">
                    Related to reverse :) 
                  </div>
                   
                 </div>
                 
                 
                 
              
                  
                 
                 
      </div>
      
      
    </div>
  )
}

export default Hint
