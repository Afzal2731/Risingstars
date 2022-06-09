import React,{useState} from "react";
import axios from "axios";

import './rslogin.css';
import { Link } from "react-router-dom";
import Login from "./rslogin";
const Rspregister = () =>{
    const[name, pickName] = useState("");
    const[email, pickEmail] = useState("");
    const[password, pickPassword] = useState("");
    const[mobile, pickMobile] = useState("");
    const[address, pickAddress]=useState("");
    const[address1, pickAddress1] = useState("");
    const[address2, pickAddress2] = useState("");
    const[city, pickCity] = useState("");
    const[postalcode, pickPostalcode] = useState("");
    const[msg, updatemessage] = useState("");

    const save = () =>{
        var url = "http://localhost:1234/registration/";
        var userinfo = {
            "name":name, 
            "email":email, 
            "address":address,
            "mobile":mobile, 
            "address1":address1,
            "address2":address2,
            "city":city,
            "postalcode":postalcode

        };
        axios.post(url, userinfo)
        .then(response=>{
            updatemessage(name + " Register Successfully...");
            pickName(""); pickEmail(""); pickPassword(""); pickMobile(""); pickAddress1("");
             pickAddress2(""); pickCity("");pickPostalcode("");
        })
    }
    return(
        
        
        <div className="Login-Page---Rising-Star-1">
        <div className="Rectangle-1">
            <img src="star.png" alt="star"/>
              <p className="Rising-Stars">
              Rising Stars
              </p>
              <img src="Component 4.png" className="im" alt="group_2"/>
        </div>

        <span className="Hey-welcome-Create-account-for-your-Star">
                  <b>Parent Registeration</b>
                     <br/>     <p  className="create-welcome"> Enter Your Details To Register
        </p>
       </span>
       <p className="mg">{msg}</p>
       <div className="text-field">
                <input type="text" required="required" 
                 onChange={obj=>pickName(obj.target.value)} value={name}/>
                 <label> Your Full Name*</label>
        </div>
        <p className="m"> Enter parent ’s name here</p>
                     
                        <div className="text-field">
                            
                            <input type="text" required="required"
                            onChange={obj=>pickEmail(obj.target.value)} value={email}/>
                            <label>E-Mail*</label>
                        </div>
                        
                        <div className="text-field">
                            
                            <input type="text" required="required"
                            onChange={obj=>pickMobile(obj.target.value)} value={mobile}/>
                            <label>Contact Number*</label>
                        </div>
                        <div className="text-field">
                            
                            <input type="text" required="required"
                            onChange={obj=>pickAddress(obj.target.value)} value={address}/>
                            <label>Start Typing Your Address</label>
                        </div>
        
                       
                        <div className="text-field">
                            
                            <input type="text" required="required"
                            onChange={obj=>pickAddress1(obj.target.value)} value={address1}/>
                            <label>Address line1*</label>
                           
                        </div>
                        
                        <div className="text-field">
                            
                            <input type="text" required="required"
                            onChange={obj=>pickAddress2(obj.target.value)} value={address2}/>
                            <label>Address line2*</label>
                        </div>

                           
                        <div className="text-field">
                            
                            <input type="text" required="required"
                            onChange={obj=>city(obj.target.value)} value={city}/>
                            <label>City/Town</label>
                        </div>
                        
                        <div className="text-field">
                            
                            <input type="text" required="required" 
                            onChange={obj=>pickPostalcode(obj.target.value)} value={postalcode}/>
                            <label>postcode</label>
                        </div>
                        
                      
                      
                        <p className="l">
                        I would like to receive <span id="r"> Rising Stars  </span> newsletter and other communications
                        </p>
                        <p><input type="radio" className="offset-2"/>Yes,Please
                        <span className='offset-3'><input type="radio"/>No,thanks</span></p>
                        
                        <div className='text-center'>
                            <button id="b1"
                            className='btn btn-primary' onClick={save}>
                                <Link to={`/pregister/`} className="mylink"> Register </Link> </button>
                        </div>
                        <p className="offset-2">
                        By registering you are agreed to our<span id="r"> Term and Conditions</span>
                        </p>
    </div>
    
)
    
}


export default Rspregister;