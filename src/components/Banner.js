import React from "react";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./css/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="space" id="home" />
      <div className="banner_textBackground">
        <h1 className="banner_title">David Felix</h1>
        <h3 className="banner_subtitle">FullStack developer</h3>

        <i className="code icon inverted" />

        <ul className="icons">
          <li>
            <a
              href="https://github.com/Dfelix02"
              target="_blank"
              rel="noreferrer"
            >
              <Icon size="large" name="github" color="olive" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/david-felix-a392a6193/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon size="large" name="linkedin" color="olive" />
            </a>
          </li>
        </ul>
      </div>

      <div className="banner_footer" id="about_me" />
    </div>
  );
}

export default Banner;
