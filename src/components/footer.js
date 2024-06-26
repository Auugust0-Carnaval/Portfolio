import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({text}) => {
    return (
        <footer>
            <p>
                <a href="https://github.com/Auugust0-Carnaval"><FontAwesomeIcon icon={faGithub} id="github" /></a>
                {text}
            </p>
        </footer>
    )
}

export default Footer

