import React, { useState, useEffect } from "react";
import '../assets/css/experimental.css';

function toggleSidebar() {
  var sidebar = document.getElementsByClassName('sidebar');
  sidebar[0].classList.toggle('active');
}

const Experimental = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverDelay = 500; // 1/4 second

  let hoverTimeout;
  const addClassOnHover = () => {
    setIsHovered(true);
  };

  const removeClassOnHover = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const element = document.getElementById('sidebar');

    const handleMouseOver = () => {
      hoverTimeout = setTimeout(addClassOnHover, hoverDelay);
    };

    const handleMouseOut = () => {
      clearTimeout(hoverTimeout);
      removeClassOnHover();
    };

    // Event listeners for mouseover and mouseleave
    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseleave', handleMouseOut); // Here use mouseleave instead of mouseout

    // Cleanup function to remove event listeners
    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseleave', handleMouseOut); // Here also change from mouseout to mouseleave
      clearTimeout(hoverTimeout);
    };
  }, []);


  return (
    <div>
      <div id="sidebar" className={isHovered ? 'sidebar active' : 'sidebar'}>
        {/* <button onClick={toggleSidebar}>
          <div className="line"/>
          <div className="line"/>
          <div className="line"/>
        </button> */}
        <i className="ph-thin ph-cube"></i>
        <i className="ph-thin ph-cube"></i>
        <i className="ph-thin ph-cube"></i>
        <i className="ph-thin ph-cube"></i>
      </div>
    </div>
    
  );
};

export default Experimental;
