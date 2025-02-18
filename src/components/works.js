import React, { useState } from "react";
import botImage from './Img/botProject.jpg';
import pawImage from './Img/pawimg.jpg';
import heroImage from './Img/heroImage.jpg';

const Works = (text, changeLanguage) => {
    const [hovered, setHovered] = useState(null); // setando valor inicial do estado hovered como nulo

    const handleMouseEnter = (index) => {
        setHovered(index); //atualiza o estado hovered conforme o valor passado no argumento (parametro index)
    };

    const handleMouseLeave = () => {
        setHovered(null); //atualiza o estado hovered para nulo quando o mouse sai da area da imagem     
    };

    return (
        <div className="gridWorks">
            <h1 className="text-center">Works</h1>
            <div className="grid">
                <div className="row">
                    {[botImage, pawImage, heroImage].map((image, index) => (
                        <div
                            className="col-md-4 spaceWork"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            key={index}
                        >
                            {hovered === index ? ( // SE hovered for igual a index, exibe o botao para visitar o repositorio
                                <div className="overlay">
                                    <button className="btn btn-outline-primary">VISIT REPOSITORE</button>
                                </div>
                            ) : ( // SENAO exibe a imagem
                                <img src={image} className="small-image" alt="work" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;