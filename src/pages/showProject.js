// import programmer from "../components/Img/2dgame.jpg";;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const ShowProject = ({ text, changeLanguage }) => {
  return (
    <div className="showProjects">
      <div className="contentStacks border">
        <div className="row">
          <div className="col-4 border-right">
            <FontAwesomeIcon icon={faCode}  className="icon" id='code'/>
            </div>
          <div className="col-4 border-right">
          <FontAwesomeIcon icon={faGear} className="icon" id='gearCode'/>
          </div>
          <div className="col-4">
            <FontAwesomeIcon icon={faDatabase} className="icon" id='database'/>
          </div>
        </div>
        
      </div>
      

      {/* <div className="projects">
        <img src={programmer} className="projectImage" alt="User" />
      </div> */}
    </div>
  );
};

export default ShowProject;
