import React from "react";
import './styles.css';
import { useDispatch } from "react-redux";

import { deletePost } from '../../../actions/posts';


const Post = ({ post, onDelete }) => {
  const dispatch = useDispatch();

  return(
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.caption}</p>
      <p className="post-planner">Planned by: {post.planner}</p>
      {post.selectedFile && (
        <img src={post.selectedFile} alt="Post" className="post-image" />
      )}

      <div className="post-rating">{post.rating}</div> 
      <button onClick={() => dispatch(deletePost(post._id))} className="delete-button">Delete</button>
    </div>
  );
}

export default Post;
