import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">

          <NavLink to='/home' className="navbar-brand navbarBrand ml-3">Kake<span id='first_span'>masters</span></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
            aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>

          </button>

          <div className="collapse navbar-collapse"></div>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to='/home' className="nav-link navLink">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cakeBuilder" className="nav-link navLink">Cake Builder </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='/setReminder' className="nav-link navLink">Set Reminder</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/gallery' className="nav-link navLink">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/aboutUs' className="nav-link navLink">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contactUs' className="nav-link navLink">Contact Us</NavLink>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <button className="btn menu-right-btn border" type="submit" > Template </button>
            </form>

          </div>
        </nav>
      </header >
    </div>
  );
}

export default Header;
