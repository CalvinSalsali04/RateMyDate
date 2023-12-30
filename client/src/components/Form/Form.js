import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import './styles.css';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', planner: '', caption: '', selectedFile: '' });
  const dispatch = useDispatch();

  const safeSetCurrentId = typeof setCurrentId === 'function' ? setCurrentId : () => console.warn("setCurrentId not provided");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!currentId) {
      dispatch(createPost(postData));
    } else {
      
      dispatch(updatePost(currentId, postData));
    }
    clear();
  };

  const clear = () => {
    safeSetCurrentId(0);
    setPostData({ title: '', planner: '', caption: '', rating: '', selectedFile: '' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="formTitle">Title</label>
          <input 
            type="text" 
            className="form-input" 
            id="formTitle" 
            placeholder="What is it?" 
            value={postData.title} 
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="formTitle">Planner</label>
          <input 
            type="text" 
            className="form-input" 
            id="formPlanner" 
            placeholder="Who's idea was it?" 
            value={postData.planner} 
            onChange={(e) => setPostData({ ...postData, planner: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="formCaption">Caption</label>
          <textarea 
            className="form-input" 
            id="formCaption" 
            placeholder="What did you do?" 
            value={postData.caption} 
            onChange={(e) => setPostData({ ...postData, caption: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="formCaption">Rating</label>
          <textarea 
            className="form-input" 
            id="formRating" 
            placeholder="What do you rate it?" 
            value={postData.rating} 
            onChange={(e) => setPostData({ ...postData, rating: e.target.value })}
          />
        </div>
        <div className="form-group">
          <FileBase 
            type="file" 
            multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
        <button type="button" className="form-button" onClick={clear}>Clear</button>
      </form>
    </div>
  );
};

export default Form;
