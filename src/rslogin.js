import React,{useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './rslogin.css';
const Login = ()=>{
   const [email, pickEmail]=useState("");
   const [password, pickPassword]=useState("");
   const [msg, updatemsg]=useState("");

   const loginCheck = ()=>{
       if(email=== "" || password=== ""){
           updatemsg("Enter Email & password");
       }else{
           updatemsg("Please wait validating");
           var userStatus=false;
           axios.get("http://localhost:1234/registration/")
           .then(response=>{
               for(var i=0; i<response.data.length; i++){
                   var semail=response.data[i].email;
                   var spassword=response.data[i].password;
                   if(email=== semail && password=== spassword){
                       userStatus=true;
                       updatemsg("Success Plaese wait");
                       window.location.reload();
                       break;
                   }
               }
               if(userStatus===false){
                   updatemsg("Account invaild or doesn't exists");
               }
           })
       }
   }
    return(
     
        <div className="Login-Page---Rising-Star-1">
            <div className="Rectangle-1">
                <img src="star.png" alt="star"/>
                  <p className="Rising-Stars">
                  Rising Stars
                  </p>
                  <img src="group_2.png" className="im" alt="group_2"/>
            </div>

            <span className="Hey-welcome-Create-account-for-your-Star">
                      Hey, welcome 
                         <br/>     <p  className="create-welcome"> Create account for your
            <span className="text-style-1">Star</span></p>
           </span>
           <p className="mg">{msg}</p>
           <div className="text-field">
			        <input type="text" required="required" 
                     onChange={obj=>pickEmail(obj.target.value)} value={email}/>
			         <label> Email or Mobile Number*</label>
            </div>
            <div className="text-field">
			        <input type="password" required="required"
                    onChange={obj=>pickPassword(obj.target.value)} value={password}/>
			         <label>Password*</label>
            </div>
            
            <div className="Remember-Me">
           <input type="checkbox" className="check"/> Remember Me
           </div>
           <p className="Forgot-Password">
                  Forgot Password?
              </p>
              <div  onClick={loginCheck}>
                 <span id="b" >
                    Login
                  </span>
              </div>
              <p className="Dont-have-account">
                      Don’t have account?
               </p>
               <p className="Regis">
               <Link  to={`/register/${email}`}> 
                                     <ins id="r">Register</ins>
                                    </Link>
               </p>
        </div>
        
    )
}
export default Login;