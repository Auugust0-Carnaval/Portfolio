import React from 'react';
import Flag from 'react-flagkit';

const Header = ({ text, changeLanguage }) => {
  return (
    <header>
      <div className='row'>
        <div className='col-8'>
          <div className='entry'>
            <h5>{text}</h5>
          </div>
        </div>
        <div className='col-4' style={{ textAlign: 'right' }}>
          <div className="flags">
              <Flag 
                country="US" 
                size={35} 
                style={{ marginRight: '10px', cursor: 'pointer' }} 
                onClick={() => changeLanguage("en")} 
              />
              <Flag 
                country="BR" 
                size={35} 
                style={{ cursor: 'pointer' }} 
                onClick={() => changeLanguage("pt")} 
              />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
