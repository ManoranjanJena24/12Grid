import React from 'react';
import './Frame.css';

const Frame = () => {
  return (
    <div className="frame">
      <div className="gradient"></div>
      <div className="breadcrumb">Home / <span className='contact'> Contact Us</span></div>
      <div className="large-text">Contact Us</div>
    </div>
  );
};

export default Frame;

