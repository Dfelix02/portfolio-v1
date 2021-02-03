import React from "react";
import { Popup } from "semantic-ui-react";
import { Button, Card, Grid, Icon, Image, Statistic } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import remembermeImage from "./images/rememberme_img.png";
import covidImage from "./images/covid19_img.png";
import twoChanImage from "./images/2chan_img.png";
import netfloxImage from "./images/netflox_img.png";

import "./css/Projects.css";

function Projects() {
  return (
    <div>
      <div className="projects_container">
        <h1>Some Projects I have Worked on so far</h1>

        <hr
          style={{
            width: "50%",
            alignItems: "center",
            display: "block",
            margin: "auto",
            marginBottom: "20px",
            marginTop: "0",
          }}
        />
        <div className="projects_notlive">
          <Grid columns={2} divided stackable>
            <div className="projects_liveHeader">
              <Statistic size="tiny">
                <Statistic.Value>not Live</Statistic.Value>
                <Statistic.Label>
                  <Icon name="hide" />
                </Statistic.Label>
              </Statistic>
            </div>

            <Grid.Row>
              <Grid.Column>
                <Card
                  style={{
                    marginTop: "10px",
                    height: "100%",
                    width: "100%",
                    background: "rgb(128, 128, 1, 0.5)",
                  }}
                >
                  <Card.Content>
                    <Image src={remembermeImage} size="massive"></Image>
                    <Card.Header style={{ marginTop: "10px" }}>
                      RememberMe
                    </Card.Header>
                    <Card.Meta>React/Ruby</Card.Meta>
                    <Card.Description>
                      A todo list website with sign up and sign in user
                      verification and a random image external API.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui three buttons">
                      <Popup
                        content={"Front-end Repo"}
                        position="top center"
                        inverted
                        trigger={
                          <Button
                            color="blue"
                            href="https://github.com/Dfelix02/RememberMe_Front_end"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="react" />
                          </Button>
                        }
                      />

                      <Popup
                        position="top center"
                        inverted
                        content={"Back-end Repo"}
                        trigger={
                          <Button
                            color="red"
                            href="https://github.com/Dfelix02/RememberMe_Back_end"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="gem" />
                          </Button>
                        }
                      />
                      <Popup
                        position="top center"
                        inverted
                        content={"Demo"}
                        trigger={
                          <Button
                            color="red"
                            href="https://drive.google.com/file/d/1c4kQpFT2Py4COSX8jkcvylh5Lg2n_ZMT/view"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="play" />
                          </Button>
                        }
                      />
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card
                  style={{
                    marginTop: "10px",
                    height: "100%",
                    width: "100%",
                    background: "rgb(128, 128, 1, 0.5)",
                  }}
                >
                  <Card.Content>
                    <Image src={covidImage} size="massive"></Image>
                    <Card.Header style={{ marginTop: "10px" }}>
                      Covid-19 Traker
                    </Card.Header>
                    <Card.Meta>React</Card.Meta>
                    <Card.Description>
                      A website that tracks the Covid-l9 virus situation all
                      over the world with a map and a graph showing the number
                      of current cases, recovered and deaths in every country.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Popup
                        content={"Github Repo"}
                        position="top center"
                        inverted
                        trigger={
                          <Button
                            color="blue"
                            href="https://github.com/Dfelix02/covid-19-tracker"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="react" />
                          </Button>
                        }
                      />
                      <Popup
                        content={"Demo"}
                        position="top center"
                        inverted
                        trigger={
                          <Button
                            color="red"
                            href="https://drive.google.com/file/d/1bBhK-Bw0eTU_dYF0XYFDerF05a1chvxx/view"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="play" />
                          </Button>
                        }
                      />
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="projects_live">
          <Grid columns={2} divided stackable>
            <div className="projects_liveHeader">
              <Statistic size="tiny">
                <Statistic.Value>Live</Statistic.Value>
                <Statistic.Label>
                  <Icon name="play" />
                </Statistic.Label>
              </Statistic>
            </div>
            <Grid.Row>
              <Grid.Column>
                <Card
                  style={{
                    marginTop: "10px",
                    height: "100%",
                    width: "100%",
                    background: "rgb(128, 128, 1, 0.5)",
                  }}
                >
                  <Card.Content>
                    <Image src={twoChanImage} size="massive"></Image>
                    <Card.Header style={{ marginTop: "10px" }}>
                      2Chan
                    </Card.Header>
                    <Card.Meta>React/Node.js</Card.Meta>
                    <Card.Description>
                      A website that is similar to a social media website, where
                      users can post, comment and like other people and their
                      posts.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui three buttons">
                      <Popup
                        content={"Front-end Repo"}
                        position="top center"
                        inverted
                        trigger={
                          <Button
                            color="blue"
                            href="https://github.com/Dfelix02/2chan-client"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="react" />
                          </Button>
                        }
                      />
                      <Popup
                        content={"Back-end Repo"}
                        inverted
                        position="top center"
                        trigger={
                          <Button
                            color="yellow"
                            href="https://github.com/Dfelix02/2chan-server"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="js" color="black" />
                          </Button>
                        }
                      />
                      <Popup
                        content={"Live"}
                        inverted
                        position="top center"
                        trigger={
                          <Button
                            color="red"
                            href="https://2chan.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="play" />
                          </Button>
                        }
                      />
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card
                  style={{
                    marginTop: "10px",
                    height: "100%",
                    width: "100%",
                    background: "rgb(128, 128, 1, 0.5)",
                  }}
                >
                  <Card.Content>
                    <Image src={netfloxImage} size="massive"></Image>
                    <Card.Header style={{ marginTop: "10px" }}>
                      Netflox
                    </Card.Header>
                    <Card.Meta>Ruby/React</Card.Meta>
                    <Card.Description>
                      A Netflix front page clone, where people can see
                      movies/series/documentaries images and some trailers of
                      those. This website uses The Movie Website
                      <a
                        href="https://www.themoviedb.org/?language=en-US"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        API{" "}
                      </a>
                      to get its data.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Popup
                        content={"Github Repo"}
                        position="top center"
                        inverted
                        trigger={
                          <Button
                            color="blue"
                            href="https://github.com/Dfelix02/Netflox"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="react" />
                          </Button>
                        }
                      />
                      <Popup
                        content={"Live"}
                        position="top center"
                        inverted
                        trigger={
                          <Button
                            color="red"
                            href="https://netflox-d7a44.web.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="play" />
                          </Button>
                        }
                      />
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
      <div className="projects_footer" />
    </div>
  );
}

export default Projects;
