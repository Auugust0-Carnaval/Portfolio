import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faNodeJs, faAngular, faUnity } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return (
        <div className="project">
            <div className="row">
                <div className="col-1 col-md-auto" id='nodejs'>
                    <a href='https://github.com/Auugust0-Carnaval/BYTEBOT'>
                        <FontAwesomeIcon 
                            icon={faNodeJs} 
                            className="icon" 
                        />
                    </a>
                </div>
                <div className="col-1 col-md-auto" id='angular'>
                    <a href='https://github.com/Auugust0-Carnaval/TCC-AmoPatasFrontend'>
                        <FontAwesomeIcon 
                            icon={faAngular} 
                            className="icon" 
                          
                        />
                    </a>
                </div>
                <div className="col-1 col-md-auto" id='unity'>
                    <a href='https://github.com/Auugust0-Carnaval/2DGAME'>
                        <FontAwesomeIcon 
                            icon={faUnity} 
                            className="icon" 
                             
                        />
                    </a>
                </div>
                <div className="col-1 col-md-auto" id='java'>
                    <a href='https://github.com/Auugust0-Carnaval/JPA-API'>
                        <FontAwesomeIcon 
                            icon={faJava} 
                            className="icon" 
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
