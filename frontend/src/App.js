import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login.js"
import Leaderboard from './components/Leaderboard';
import Question1 from "./pages/Question1.js"
import Question2 from './pages/Question2.js';
import "./App.css"
import Question3 from './pages/Question3.js';
import Question4 from './pages/Question4.js';
import Question5 from './pages/Question5.js';
import Question6 from './pages/Question6.js';
import Question7 from './pages/Question7.js';
import Question8 from './pages/Question8.js';
import Question9 from './pages/Question9.js'
import Question10 from './pages/Question10.js';
import Rule from './pages/Rule.js';
import Hint from './pages/Hint.js';
const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login />
    },
    {
      path:'/pages/11',
      element:<Leaderboard />
    },
    {
      path:'/pages/1',
      element:<Question1 />
 
    },
    {
      path:'/pages/6',
      element:<Question7 />
 
    },
    {
      path:'/pages/5',
      element:<Question6 />
 
    },
    {
      path:'/pages/2',
      element:<Question2/>
 
    },
    {
      path:'/pages/3',
      element:<Question3/>
 
    },
    {
      path:'/pages/4',
      element:<Question4/>
 
    },
    {
      path:'/pages/10',
      element:<Question5/>
 
    },
    {
      path:'/pages/7',
      element:<Question8/>
 
    },{

      path:'/pages/8',
      element:<Question9/>
    },
    {

      path:'/pages/9',
      element:<Question10/>
    },{

      path:'/rule',
      element:<Rule/>
    },{

      path:'/hint',
      element:<Hint/>
    }
  ])
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App
