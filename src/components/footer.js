import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({text}) => {
    return (
        <footer className="align-items-center">
            <div className="row align-items-center">
                <p className="align-items-center text-center" >
                    <a href="https://github.com/Auugust0-Carnaval"><FontAwesomeIcon icon={faGithub} id="github" /></a>
                    {text}
                </p>

            </div>
            
        </footer>
    )
}

export default Footer

