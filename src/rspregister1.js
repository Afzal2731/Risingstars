import React from "react";
import './rslogin.css';
import { Link } from "react-router-dom";
const Rsprofile = () =>{
    <h1></h1>
    return(
        <div className="Login-Page---Rising-Star-1">
        <div className="Rectangle-1">
            <img src="star.png" alt="star"/>
              <p className="Rising-Stars">
              Rising Stars
              </p>
              <img src="Component 31.png" className="im" alt="Component 31"/>
        </div>
        <img src="icon_success.png" className="icon" alt="icon_success"/>
        <p className="icon1">
        Profile created successfully
        </p>
        <div className='text-center'>
                            <button id="b2"
                            className='btn btn-primary' > 
                            <Link to={`/login/`} className="mylink">Back To Login </Link></button>
                        </div>
        </div>
    )
}

export default Rsprofile;