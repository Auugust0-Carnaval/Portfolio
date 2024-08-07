import React, { useState } from 'react';
import userImage from "./Img/personProgrammer.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const About = ({text}) => {
 
 
  // const [color, setColor] = useState('white');

  // const changeColor = () => {
  //   setColor('red');
  // };

  
  return (

    <div className='about'>
      <div className="row" id="about">
        <div className="col-8" id="content">
          <p className="text-white text-larger">
            {text}
          </p>
        </div>
        <div className="col-4" id="imgCol">
          {/* <FontAwesomeIcon icon={faHeart} className="heart-icon" onClick={changeColor}  style={{ color: color }}  /> */}
          <img src={userImage} className="small-image" alt="User" />
        </div>
    
      </div>


    </div>
   
    
  );
};

export default About;
