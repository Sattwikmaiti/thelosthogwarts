import React,{useState,useEffect} from 'react'
import "./styles.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import leader from "../images/leader.png"
import Cursor from '../pages/Cursor';
import {useNavigate} from "react-router-dom"
const Leaderboard = () => {
  console.log(process.env)
 const navigate=useNavigate()
    const [database,setDatabase]=useState([])
    
    useEffect(() => {
      getLeader();
      
    }, [database]);
  const getLeader = async ()=>{
    const response =await fetch(`https://thelosthogwarts.onrender.com/registers`);
    const data=await response.json();
    setDatabase(data);
  }
 
      
  return (
    <div className=" leader">
     
      
<Cursor />
<div className="button" onClick={async()=>
        { 

         
            const response =await fetch(`https://thelosthogwarts.onrender.com/register/${localStorage.getItem("email")}`);
            const data=await response.json();
            
            navigate(`/pages/${data.progress+1}`)
          

        }}
        
        style={{padding:'1rem',backgroundColor:'black'}}
        >
          <h1>Back To Progress</h1>
        </div>

        <center style={{color:'black'}}><h1>LeaderBoard</h1></center>
  <div className="wrapper">
      {
        
        database.length>0?(
          <TableContainer >
          <Table  aria-label="customized table">
            <TableHead>
              <TableRow className="headings">
                
                <TableCell align="right" style={{color:'black',fontSize:'2rem'}}>UserName</TableCell>
                <TableCell align="center" style={{color:'black',fontSize:'2rem'}}>Email ID</TableCell>
                <TableCell align="right" style={{color:'black',fontSize:'2rem'}}>Score</TableCell>
                <TableCell align="right" style={{color:'black',fontSize:'2rem'}}>Question Progress</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {database.map((element,i)=>{
            return (
              <TableRow className="row" key={i}>
              <TableCell align="right">
              <div className="username">
                      {i+1} ) {element.username}
                      </div>
              </TableCell>
              <TableCell align="center">
              <div className="email">
                        {element.email}
                      </div>
              </TableCell>
                     
              <TableCell align="right">
              <div className="score">
                        {element.score}
                      </div>
              </TableCell>
                     
              <TableCell align="right">
             
              <div className="progress">
                        {element.progress}
                      </div>

              </TableCell>
                     
              </TableRow>
              
                    
                     
                     )

          })}
            </TableBody>
          </Table>
        </TableContainer>
         
        ):'Leaderboard is vacant'
      }
      </div>
    </div>
  )
}

export default Leaderboard
