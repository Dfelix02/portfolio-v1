import React, { useEffect, useState } from "react";
import "./css/Header.css";
import "semantic-ui-css/semantic.min.css";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <a href="#home">
        <i className="home icon"></i>
      </a>
      <a href="#about_me">About me</a>
      <a href="#projects"> Projects</a>
      <a href="#contact_me">Contact me </a>
    </div>
  );
}

export default Header;
