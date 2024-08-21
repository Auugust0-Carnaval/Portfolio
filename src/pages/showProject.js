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
            <h4 className='title-skill'>{text[0]}</h4>
            <div className='content-one'>
              <h6>{text[3]}</h6>
              <h5 className='subTitle'>{text[4]}</h5>
              <div className='row'>
                <h6>HTML, CSS ,JS ,React ,Angular ,Bootstrap ,ASP.NET</h6>
              </div>
            
            </div>
          </div>
          <div className="col-4 border-right">
            <FontAwesomeIcon icon={faGear} className="icon" id='gearCode'/>
            <h4 className='title-skill'>{text[1]}</h4>
            <div className='content-one'>
              <h6>
              Para o backend, gosto de trabalhar com .NET C# e Node.js, usando ORM para facilitar o gerenciamento de dados e tornar o desenvolvimento mais eficiente.</h6>
              <h5 className='subTitle'>{text[4]}</h5>
              <div className='row'>
                <h6>Nodejs, .Net , Postman, Insominia, APIs RESTful, Jest</h6>
              </div>
            </div>
          </div>
          <div className="col-4">
            <FontAwesomeIcon icon={faDatabase} className="icon" id='database'/>
            <h4 className='title-skill'>{text[2]}</h4>
            <div className='content-one'>
              <h6>Trabalho com SQL e MySQL usando comandos DML para manipular dados, DDL para estruturar o banco, e TCL para gerenciar transações e garantir a integridade dos dados.</h6>
              <h5 className='subTitle'>{text[4]}</h5>
              <div className='row'>
                <h6>MySQL Workbench, DBeaver, PostgreSQL, SQL Server Management Studio, Azure Data Studio </h6>
              </div>
            </div>
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
