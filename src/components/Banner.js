import React from "react";
import "semantic-ui-css/semantic.min.css";

import "./css/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        src="https://dutchculture.nl/sites/default/files/styles/dc3_header/public/thumbnails/image/Undone%20-%20Submarine.jpg?itok=Wx5YTnIH&c=f1e6edfa8f57f25ef40a6c9bce0634a5"
        className="animation"
        alt="animation"
      ></img>
      <h1 className="banner_title">David Felix</h1>
      <h3 className="banner_subtitle">FullStack developer</h3>

      <i className="code icon inverted" />

      <ul className="icons">
        <li>
          <a href="#">
            <i className="large github icon inverted" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="large linkedin icon inverted" />
          </a>
        </li>
      </ul>
      <div className="banner_footer" />
    </div>
  );
}

export default Banner;
