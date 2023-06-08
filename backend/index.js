
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const User=require('./UserSchema')
  

mongoose
  .connect('mongodb+srv://treasurehunt:4QQLEdmFwgu66ey6@cluster0.27odkpt.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));



  app.post("/register", async (req, res) => {
   
    //salt is a random string , generated in  time=10
      
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        score: req.body.score,
       
        lastcorrect:Date.now()
      });
  //saving the new user 
      const user = await newUser.save();
      res.status(200).json(user);
    
    
  })




app.get('/registers', async (req, res) => {
	const todos = await User.find();
  const sort={score:-1,lastcorrect:1}
  console.log("Hello!!!")
 // console.log(todos);
 const newdata= await User.find({}).sort(sort);


	res.json(newdata);
});

app.get('/register/:id',async(req,res)=>{
  const todos=await User.findOne({email: req.params.id});
  res.json(todos)
})
app.put('/register/update/:id', async (req, res) => {
  
	const todo = await User.findOneAndUpdate({email: req.params.id},{new:true});
todo.score+=10;
todo.progress+=1;
todo.lastcorrect=Date.now();	

	todo.save();

	res.json(todo);
});



  app.listen(3030,()=>{console.log("server started in port 3030")})