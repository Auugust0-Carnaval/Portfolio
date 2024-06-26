import React from 'react';
import userImage from "./Img/personProgrammer.png";
const About = ({text}) => {
  return (
    <div className="row" id="about">
      <div className="col-8" id="content">
        <p className="text-white text-larger">
          {text}
        </p>
      </div>
      <div className="col-4" id="imgCol">
        <img src={userImage} className="small-image" alt="User" />
      </div>
    </div>
  );
};

export default About;
