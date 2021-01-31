import React from "react";
import { Card } from "semantic-ui-react";

import "./css/AboutMe.css";

function AboutMe() {
  return (
    <div>
      <div className="about_container">
        <h1 className="about_title">
          Hello! Welcome and thank you for visiting my website!
        </h1>
        <hr
          style={{
            width: "50%",
            alignItems: "center",
            display: "block",
            margin: "auto",
            marginBottom: "20px",
          }}
        />

        <Card fluid className="about_column">
          <Card.Content>
            <p>
              Hi, my name is David and I'm a 2 years college and Bootcamp grad.
              I attended Borough of Manhattan Community College and Flatiron
              school where I learned many computer languages like Ruby on Rails,
              Javascript, C++, and a few more together with some really useful
              frameworks and libraries.
            </p>
            <p>
              I started coding because I love playing video games. I got so used
              to computers and consoles that I ended up liking messing with
              them. From dismantling a computer to its motherboard to learning
              how to say "hello world" using a programming language and then
              making functional websites. I really enjoyed the process and the
              end product.
            </p>
            <p>
              I'm a pretty chill and open-minded person. I love to eat
              empanadas, especially those with cheese inside of them and drink
              mango/pineapple juice. My favorite ice cream flavor is vanilla but
              I also enjoy other flavors. I always like to keep things fresh and
              switch flavors because if you only eat vanilla ice cream you may
              grow tired of it.
            </p>
          </Card.Content>
        </Card>
      </div>

      <div className="aboutMe_footer" id="projects" />
    </div>
  );
}

export default AboutMe;
