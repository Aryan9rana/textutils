import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar(props){
return (
    <nav className={`navbar navbar-expand-lg bg-navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid ">
    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`}to="/about">about</Link>
        </li>
      
      </ul>
      <input type="checkbox" className="btn-check" onClick={props.toggleMode} id="btn-check-outlined" autoComplete="off"/>
<label className={`btn btn-${props.mode==='light'?'dark':'light'}`} htmlFor="btn-check-outlined">☾</label><br/>


    </div>
  </div>
</nav>
);
}

