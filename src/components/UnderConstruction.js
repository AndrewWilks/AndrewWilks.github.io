import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <h1>Under Construction</h1>
      <p>This page is currently under construction. Please check back soon!</p>
      <Link to="/"><button>Home</button></Link>
    </div>
  );
};

export default UnderConstruction;