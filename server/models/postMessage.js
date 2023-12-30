import mongoose from 'mongoose';

const postSchema =  mongoose.Schema({
  title: String,
  caption: String,
  planner: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const postMessage = mongoose.model('PostMessage', postSchema); 

export default postMessage;