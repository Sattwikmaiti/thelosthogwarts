import React ,{useRef,useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../images/image1.png"
import song from "../images/song.mp3"
import "./styles.css"
import App from '../App'
import puzz1 from "../images/3.png"
import submit from "../images/submit.png"
import Cursor from './Cursor';
import i1 from "../images/1.png"
import i2 from "../images/2.png"
import i3 from "../images/3.png"
import i4 from "../images/4.png"
import i5 from "../images/5.png"
import i6 from "../images/6.png"
import i7 from "../images/7.png"
import i8 from "../images/8.png"
import i9 from "../images/9.png"
import Header from "../components/Header.js"
const Question4 = () => {

  
    const update = async(id)=>

    {
    
      
       await fetch(`http://localhost:3030/register/update/` + id, {
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
      id:9,
      value:0,
    },
    {
      id:8,
      value:0,
    },
    {
      id:7,
      value:0,
    }
    ,
    {
      id:6,
      value:0,
    },
    {
      id:5,
      value:0,
    },
    {
      id:4,
      value:0,
    },
    {
      id:3,
      value:0,
    },
    {
      id:2,
      value:0,
    },
    {
      id:1,
      value:0,
    },



  ]);
  const [correct,setCorrect]=useState(false)
  const [correct2,setCorrect2]=useState(true);
    const onClick = ()=>
    {    console.log("ee") 
     


        if(option[0].value===option[0].id &&
            option[1].value===option[1].id &&
            option[2].value===option[2].id &&
            option[3].value===option[3].id &&
            option[4].value===option[4].id &&
            option[5].value===option[5].id &&
            option[6].value===option[6].id &&option[7].value===option[7].id &&
            option[8].value===option[8].id 
            )
        {update(localStorage.getItem("email"))
        navigate('/pages/11');
        
          
      
          new Audio(song).play()

    
    
    
    }
        
       

    }

    const updateFieldChanged = index => e => {
      
      console.log(index +' '+ e.target.value);
      let newArr = [...option]; // copying the old datas array
      // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
      newArr[index].value = parseInt(e.target.value); // replace e.target.value with whatever you want to change it to
    
      setOptions(newArr);
      console.log(newArr);
    }

  return (
   
    <div className="question1">
      <Header />
       <Cursor />
       {/** 
  <div className="boxdivs">

     <div className="upperrow">
        <div className="div">
            <input type="number" onChange={updateFieldChanged(0)}/>
        </div>
        <div className="div">
            <input type="number"onChange={updateFieldChanged(1)}/>
        </div>
    </div>
    <div className="upperrow">
        <div className="div">
            <input type="number"  onChange={updateFieldChanged(2)}/>
        </div>
        <div className="div">
            <input type="number" onChange={updateFieldChanged(3)}/>
        </div>
    </div>
    

  </div>
  <center className="q5">
  <button className="submit" onClick={onClick}>Submit</button>
  </center>
      */}







<div className="reveal">
<div className="d">



<h2>PUZZLE</h2>
<button className="divi" onClick={onClick}>
  SUBMIT
</button>

</div>

<div className="r">
  <div className="c">
  <input type="number" onChange={updateFieldChanged(0)}/>
  </div>
  <div className="c">
  <input type="number" onChange={updateFieldChanged(1)}/>
  </div>
  <div className="c">
  <input type="number" onChange={updateFieldChanged(2)}/>
  </div>
</div>
<div className="r">
  <div className="c">
  <input type="number" onChange={updateFieldChanged(3)}/>
  </div>
  <div className="c">
  <input type="number" onChange={updateFieldChanged(4)}/>
  </div>
  <div className="c">
  <input type="number" onChange={updateFieldChanged(5)}/>
  </div>
</div>
<div className="r">
  <div className="c">
  <input type="number" onChange={updateFieldChanged(6)}/>
  </div>
  <div className="c">
  <input type="number" onChange={updateFieldChanged(7)}/>
  </div>
  <div className="c">
  <input type="number" onChange={updateFieldChanged(8)}/>
  </div>
</div>

</div>

    </div>
    
  )
}

export default Question4
