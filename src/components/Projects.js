import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";

import image from "./images/rememberme_img.png";
import "./css/Projects.css";

function Projects() {
  return (
    <div>
      <div className="projects_container">
        <hr
          style={{
            width: "50%",
            alignItems: "center",
            display: "block",
            margin: "auto",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        />
        <h1>Some Projects I have Worked on so far</h1>

        <Grid columns={2} divided stackable>
          <h3>Not Live</h3>

          <Grid.Row>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image src={image} size="massive"></Image>
                  <Card.Header>RememberMe</Card.Header>
                  <Card.Meta>Ruby/React</Card.Meta>
                  <Card.Description>
                    Elliot is a sound engineer living in Nashville who enjoys
                    playing guitar and hanging with his cat.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="black">
                      <Icon name="github" />
                    </Button>
                    <Button basic color="red">
                      <Icon name="play" />
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Image src="/images/wireframe/media-paragraph.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/images/wireframe/media-paragraph.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2} divided stackable>
          <h3>Live</h3>

          <Grid.Row>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image src={image} size="massive"></Image>
                  <Card.Header>RememberMe</Card.Header>
                  <Card.Meta>Ruby/React</Card.Meta>
                  <Card.Description>
                    Elliot is a sound engineer living in Nashville who enjoys
                    playing guitar and hanging with his cat.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="black">
                      <Icon name="github" />
                    </Button>
                    <Button basic color="red">
                      <Icon name="play" />
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Image src="/images/wireframe/media-paragraph.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/images/wireframe/media-paragraph.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
