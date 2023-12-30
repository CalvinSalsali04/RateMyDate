import React from "react";
import Post from './Post/Post';

import './styles.css';




import { useSelector } from "react-redux";

const Posts = () => {
  
  const posts = useSelector((state) => state.posts);

 

  return(
    <div className="posts-container">
      {posts.map((post) => (
        <Post key={post._id} post={post}  />
      ))}
    </div>
  );
}

export default Posts;