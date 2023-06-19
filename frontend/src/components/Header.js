import React from 'react'
import "./styles.css"
import txt from "../images/txt11.png"
import { useNavigate } from "react-router-dom";
import m1 from "../images/m1.mp3"
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      <div className="header">
        <div className="s">
               <img src={txt} />
        </div>
        <div className="side">
          <div className="s1">
          <img src="https://see.fontimg.com/api/renderfont4/LOZ/eyJyIjoiZnMiLCJoIjo4MiwidyI6MTAwMCwiZnMiOjgyLCJmZ2MiOiIjMzI5RTlFIiwiYmdjIjoiI0VFRURFRCIsInQiOjF9/TGVhZGVyQm9hcmQ/parry-hotter.png" onClick={()=>{new Audio(m1).play();navigate('/pages/11'); }}/>
          </div>
          <div className="s2">
          <img src="https://see.fontimg.com/api/renderfont4/LOZ/eyJyIjoiZnMiLCJoIjo4MiwidyI6MTAwMCwiZnMiOjgyLCJmZ2MiOiIjMzI5RTlFIiwiYmdjIjoiI0VFRURFRCIsInQiOjF9/SGludHM/parry-hotter.png"  onClick={()=>{new Audio(m1).play();navigate('/hint'); }}/>
          </div>
          <div className="s1"> 
          <img src="https://see.fontimg.com/api/renderfont4/LOZ/eyJyIjoiZnMiLCJoIjo2MCwidyI6MTAwMCwiZnMiOjYwLCJmZ2MiOiIjMzI5RTlFIiwiYmdjIjoiI0VFRURFRCIsInQiOjF9/UnVsZXM/parry-hotter.png" onClick={()=>{new Audio(m1).play();navigate('/rule'); }}/>

          </div>
        </div>
      </div>
      <span style={{color:'pink'}}>!(Refresh to load the submit button)</span>
    </div>
  )
}

export default Header
