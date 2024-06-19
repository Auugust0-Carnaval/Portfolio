
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faUnity } from '@fortawesome/free-brands-svg-icons/faUnity';


const Projects = () => {
    const [showImage, setShowImage] = useState(false);

    const handleShowImage = () => {
        setShowImage(true);
    };

    return (
        <div>
            <div className="row">
                <div className="col-6" id='unity'>
                    <FontAwesomeIcon 
                        icon={faUnity} 
                        style={{ color: 'white', fontSize: '48px', cursor: 'pointer' }} 
                        onClick={handleShowImage} 
                    />
                </div>
            </div>

            {showImage && (
                <div className="row mt-3">
                    <div className="col-6">
                        <div className='row'>
                            <div className="col-6">
                                <img
                                    src="https://i.ytimg.com/vi/9-6ol6_USYg/maxresdefault.jpg" 
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-6">
                                <FontAwesomeIcon icon={faWindowClose} style={{ color: 'white', fontSize: '25px', cursor: 'pointer'}} onClick={() => setShowImage(false)} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>

        
    );
};

export default Projects;