import React from 'react';
import userImage from "./Img/personProgrammer.png";
import Flag from "react-flagkit";

const About = ({ text, changeLanguage }) => {
  return (
    <div className="row" id="about">
      <div className="col-8" id="content">
        <p className="text-white text-larger">
          {text}
        </p>
        <div className="flags">
          <Flag 
            country="US" 
            size={39} 
            style={{ marginRight: '10px', cursor: 'pointer' }} 
            onClick={() => changeLanguage("en")} 
          />
          <Flag 
            country="BR" 
            size={39} 
            style={{ cursor: 'pointer' }} 
            onClick={() => changeLanguage("pt")} 
          />
        </div>
      </div>
      <div className="col-4" id="imgCol">
        <img src={userImage} className="small-image" alt="User" />
      </div>
    </div>
  );
};

export default About;
