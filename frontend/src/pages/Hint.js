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

         
            const response =await fetch(`http://localhost:3030/register/${localStorage.getItem("email")}`);
            const data=await response.json();
            console.log(data)
            navigate(`/pages/${data.progress+1}`)
          

        }}
        
        style={{padding:'1rem',backgroundColor:'black'}}
        >
          <h1>Back To Progress</h1>
        </div>
                 <div className="hint">
                  <div className="question">
                      Question 3
                  </div>
                  <div className="sol">
                  Download the music and reverse the music . This spell for reversing is Priori incantatem and due to this spell,
                   the voices you hear have come to life. This is a very important spell,due to which harry got to excape agiant Voldemort
                  </div>
                   
                 </div>
                 <div className="hint">
                  <div className="question">
                      Question 3
                  </div>
                  <div className="sol">
                  Download the music and reverse the music . This spell for reversing is Priori incantatem and due to this spell,
                   the voices you hear have come to life. This is a very important spell,due to which harry got to excape agiant Voldemort
                  </div>
                   
                 </div>
      </div>
      
      
    </div>
  )
}

export default Hint
