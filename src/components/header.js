import React from 'react';

const Header = ({ text }) => {
  return (
    <header>
      <div className='entry'>
        <h5>{text}</h5>
      </div>
    </header>
  );
};

export default Header;
