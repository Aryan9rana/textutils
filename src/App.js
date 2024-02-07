/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alerts from './components/Alerts.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode , setMode]=useState('light');
  const [alert , setAlert]=useState(null);
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#272a2d';
      document.body.style.Color='white';
      changeAlert("dark mode enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.Color='#272a2d';
      changeAlert("light mode enabled","success");
    }
  }
  const changeAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },2000);

  }

  return (
    // <Router>
    <div>
  <Navbar title="t2" mode={mode} toggleMode={toggleMode}/>
  <Alerts alert={alert}/>
  {/* <Routes>
    <Route exact path="/" element={<Textform heading="enter the text to analyze" mode={mode} changeAlert={changeAlert}/>}/>
    <Route exact path="about" element={<About />} />
  </Routes> */}
  <Textform heading="enter the text to analyze" mode={mode} changeAlert={changeAlert}/>
  <About/>
    </div>
    // </Router>
  );
}

export default App; 
