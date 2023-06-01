import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../assets/css/utilities.css';

export const ScrollDown = () => {
  const [showClass, setShowClass] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    setShowClass(!bottom);
  };

  return (
    <div className={`ScrollDown ${showClass ? '' : 'hidden'}`}>
      <div className='scroll-down'><span>scroll down <i className="gg-arrow-down-r" /></span></div>
      <div className='scroll-down scroll-down--left'><span>scroll down <i className="gg-arrow-down-r" /></span></div>
    </div>
  );
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};