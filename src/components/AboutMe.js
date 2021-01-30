import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./css/AboutMe.css";

function AboutMe() {
  return (
    <div>
      <div className="about_container">
        <hr
          style={{
            width: "50%",
            alignItems: "center",
            display: "block",
            margin: "auto",
            marginBottom: "20px",
          }}
        />

        <Grid divided="vertically" stackable>
          <Grid.Row columns={1} className="about_introduction" only="mobile">
            <Grid.Column textAlign="center" className="about_column">
              <div className="about_column">
                <h1 className="about_title">Let me introduce myself</h1>
                <p>
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Donec sollicitudin molestie malesuada. Nulla quis
                  lorem ut libero malesuada feugiat. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem. Donec rutrum
                  congue leo eget malesuada.
                </p>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Cras ultricies ligula sed magna dictum porta. Vivamus
                  suscipit tortor eget felis porttitor volutpat. Vivamus
                  suscipit tortor eget felis porttitor volutpat. Curabitur
                  aliquet quam id dui posuere blandit.
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid divided="vertically" stackable>
          <Grid.Row
            columns={2}
            className="about_introduction"
            only="computer tablet"
          >
            <Grid.Column width={8}>
              <Image
                style={{ height: "100%", width: "100%" }}
                src="https://images.unsplash.com/photo-1610903920122-ddc45a213d0d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </Grid.Column>
            <Grid.Column textAlign="center">
              <div className="about_column">
                <h1 className="about_title">Let me introduce myself</h1>
                <p>
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Donec sollicitudin molestie malesuada. Nulla quis
                  lorem ut libero malesuada feugiat. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem. Donec rutrum
                  congue leo eget malesuada.
                </p>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Cras ultricies ligula sed magna dictum porta. Vivamus
                  suscipit tortor eget felis porttitor volutpat. Vivamus
                  suscipit tortor eget felis porttitor volutpat. Curabitur
                  aliquet quam id dui posuere blandit.
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div className="aboutMe_footer" />
    </div>
  );
}

export default AboutMe;
