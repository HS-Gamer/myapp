import React from 'react'
import {Container,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import logo from '../assets/logo.png';
const Header = () => {
    return (
    <div className="bs-example">
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a href="/landing" className="navbar-brand">
        <img
        alt=""
        src={logo}
        width="90"
        height="50"
        className="d-inline-block align-top"
      />
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
               
            </div>
            
        </div>
    </nav>
</div>
       
    )
}

export default Header
