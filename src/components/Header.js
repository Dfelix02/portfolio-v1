import React from "react";
import "./css/Header.css";
import "semantic-ui-css/semantic.min.css";

function Header() {
  return (
    <ul className="nav">
      <li>
        <a href="#home">
          <i className="home icon"></i>
        </a>
      </li>
      <li>
        <a href="#about_me">About me</a>
      </li>
      <li>
        <a href="#projects"> Projects</a>
      </li>
      <li>
        <a href="#contact_me">Contact me </a>
      </li>
    </ul>
  );
}

export default Header;
