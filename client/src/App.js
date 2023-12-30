import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import photo from './images/heart.png';





const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <div className="navbar-brand" href="#" >
            RateMyDate
            <img src={photo} alt="RateMyDate" height="60" />
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-7">
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div className="col-12 col-md-4">
           <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
}



export default App;