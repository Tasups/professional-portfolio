import React from 'react';

import jasonPic from '../images/jasonimg2.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-main">
        <div className="about-main-image">
          <img className="about-image" src={jasonPic} alt="software developer Jason Whisnant"/>
        </div>
        <div className="about-main-info">
          <h1>About Me</h1>
        </div>
      </div>
    </div>
  );
}

export default About;