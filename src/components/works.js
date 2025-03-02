import React, { useState } from "react";
import botImage from './Img/botProject.jpg';
import pawImage from './Img/pawimg.jpg';
import heroImage from './Img/heroImage.jpg';

const Works = ({ text, changeLanguage }) => {
    const [hovered, setHovered] = useState(null); // setando valor inicial do estado hovered como nulo

    const handleMouseEnter = (index) => {
        setHovered(index); //atualiza o estado hovered conforme o valor passado no argumento (parametro index)
    };

    const handleMouseLeave = () => {
        setHovered(null); //atualiza o estado hovered para nulo quando o mouse sai da área da imagem     
    };

    return (
        <div className="gridWorks">
            <h1 className="text-center text-primary">Works</h1>
            <div className="grid">
                <div className="row">
                    {[botImage, pawImage, heroImage].map((image, index) => (
                        <div
                            className="col-md-4 spaceWork"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            key={index}
                        >
                            {hovered === index ? ( // SE hovered for igual a index, exibe o botão para visitar o repositório
                                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                    <div className="row">
                                        <div className="col">
                                            <h3 className="text-primary">{text}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-outline-primary">VISIT REPOSITORY</button>
                                        </div>
                                    </div>
                                </div>
                            ) : ( // SENÃO exibe a imagem
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
