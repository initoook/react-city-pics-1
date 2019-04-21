import React from "react";
import "./Navbar.scss";
import Logo from "../../Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="city tour logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
