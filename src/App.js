import React from 'react';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './rslogin';
import Register from './register';
import Newregister from './registration';
import Rspregister from './rspregister';
import Rsprofile from './rspregister1';


function App() {
  return (
    <HashRouter>
      <nav id="topnav">
       <Link to="/login" className='mylink'> Login </Link>
       <Link to="/register" className='mylink'> PRegister </Link>
       <Link to="/pregister" className='mylink'> </Link>
       </nav>

       
       

    <Routes>
        <Route  exact path="/login" element={<Login/>}/>
        <Route  exact path="/register" element={<Rspregister/>}/>
        <Route  exact path="/pregister" element={<Rsprofile/>}/>
    </Routes>
  </HashRouter>
  )
}

export default App;
