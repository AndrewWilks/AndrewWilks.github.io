import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/UnderConstruction.css';

const NotFound = () => {
  return (
    <div className="under-construction">
      <h1>Opps! Something went wrong...</h1>
      <p>This page is lost. Please try an other!</p>
      <Link to="/"><button>Home</button></Link>
    </div>
  );
};

export default NotFound;