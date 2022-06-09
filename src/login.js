import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () =>{
    const[email, pickEmail] = useState("");
    const[pass, pickPassword] = useState("");
    const[msg, updateMsg] = useState("Please Enter Login Details");

   const loginCheck = () =>{
       if( email =="" || pass =="" ){
            updateMsg("Enter Your Email & Password");
       }else{
            updateMsg("Please Wait Validating...");
            var userStatus = false;
            // api call 
            axios.get("http://localhost:1234/registration")
            
            .then(response =>{
               for(var i=0; i<response.data.length; i++){
                      var semail = response.data[i].email; 
                      var spass = response.data[i].password; 
                      if(email == semail && pass == spass){
                        userStatus = true;
                        updateMsg("Successfully logged in..");
                        window.location.reload();
                        break;
                      }
                      
               } // for loop end 
               
               if(userStatus==false){
                    updateMsg("Fail : Account Invalid or Not Exists");
                }

            }) // api call end
          
       } // else end here
   }

    return(
        <>
           
            <div className='container' id="d">
                <div className='row'>
                    <div className='col-lg-8'>
                        <img src="group_2.jpg" className='img-fluid rounded float-right ' alt="group-2" height={500} width={500} />
                        <h3 > Hey, Welcome <br/>Create an Account for your Star </h3>
                        <p className='text-center'>{msg}</p>
                        
                        <div className='mb-3'>
                            
                            <input type="email" id="i"
                            className='form-control'  required
                            onChange={obj=>pickEmail(obj.target.value)}/>
                            <label> E-Mail Id or Mobile Number</label>
                        </div>

                        <div className='mb-3'>
                            
                            <input type="password" className='form-control' required id="i"
                            onChange={obj=>pickPassword(obj.target.value)}/>
                            <label>Password</label>
                        </div>
                        <p><input type="checkbox" className='offset-2'/>Rememeber me
                        <span className='offset-5' id="r" >Forgot Password?</span></p>
                        <div className='text-center'>
                            <button id="b"
                                className='btn btn-primary ' 
                                onClick={loginCheck}> Login 
                            </button>
                        </div>
                        <p className='offset-3'> Don't have Account?
                            
                            <Link  to={`/registration/${email}`}> 
                                     <ins className='offset-1' id="r">Register</ins>
                                    </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;