
const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        
      },
      email: {
        type: String,
        required: true,
      },
     
      score: {
        type: Number,
        required: true,
        default:0
      },
      progress: {
        type:Number,
        required:true,
        default:0
      },
      lastcorrect:{
        type:String,
        default:new Date().getTime()

      }
    
    },
   
  );
  
  const UserSchema = mongoose.model("UserSchema", PostSchema);
  module.exports = UserSchema;

