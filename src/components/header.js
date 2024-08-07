import React, { useState, useEffect } from 'react';
import Flag from 'react-flagkit';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

const Header = ({ text, changeLanguage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState("white");
  const [showHeart, setShowHeart] = useState(false);

  
  useEffect(() => {
    let timer; // variavel de scopo para o setTimeout 
    if (isHovered) {
      setShowHeart(true); // mostra o coracao quando o mouse estiver em cima
    } else {
      timer = setTimeout(() => { // executa o setTimeout para esconder o coracao depois de 5 segundos
        setShowHeart(false); // esconde o coracao quando o mouse estiver fora
      }, 5000); //intervalo de 5 segundos para esconder o coracao
    }
    return () => clearTimeout(timer); // limpa o timeout quando o componente e desmontado
  }, [isHovered]); // reexecuta o useEffect quando o valor de isHovered muda

  const handleMouseEnter = () => {
    setIsHovered(true); // apresenta o coracao
  };

  const handleMouseLeave = () => {
    setIsHovered(false); //esconde o coracao
  };

  const clickHeart = () => {
    setColor("red"); //altera a cor do coracao
  };

  return (
    <header>
      <div className='row'>
        <div className='col-8'>
          <div className='entry-container'>
            <div 
              className='entry' 
              onMouseEnter={handleMouseEnter} // executa o handleMouseEnter quando o mouse estiver em cima do elemento
              onMouseLeave={handleMouseLeave} // executa o handleMouseLeave quando o mouse estiver fora do elemento
            >
              <h5>{text}</h5>
            </div>
            {showHeart && (
              <div id='likePerson'>
                <FontAwesomeIcon icon={faHeartPulse} className="heart-icon" onClick={clickHeart} style={{ color: color }}/>
              </div>
            )}
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
