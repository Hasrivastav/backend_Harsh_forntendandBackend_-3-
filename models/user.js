import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
   
  },
  email: {
    type: String,
    
    // unique: true,
  },
  phone: {
   
    type: Number,
   
  },
  website: {
    type: String,
    
  },
});

export const User = mongoose.model("User", schema);