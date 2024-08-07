const NavRoot = ({ text,changeLanguage}) => {

    return (
        <nav className="navBar">


            <div className="row">
                <div className="col-md-auto">
                    <p className="textName text-white">{text[0]}</p>
                </div>
                <div className="col-md-auto">
                    <p className="textName text-white">{text[1]}</p>
                </div>
                <div className="col-md-auto">
                    <p className="textName text-white">{text[2]}</p>
                </div>
               
            </div>




            {/* <p className="textName text-white">Augusto de oliveira carnaval </p> */}
           
           
        </nav>
    )
       
}


export default NavRoot