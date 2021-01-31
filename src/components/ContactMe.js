import React from "react";
import emailjs from "emailjs-com";
import { Button, Container, Form } from "semantic-ui-react";

import "./css/ContactMe.css";

function ContactMe() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("personal info").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    e.target.reset();
  };
  return (
    <div>
      <h1 id="contact_me">Contact Me</h1>
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
      <Container className="contactMe_form">
        <Form onSubmit={sendEmail}>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" name="first_name" required />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" name="last_name" required />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" type="email" name="email" required />
          </Form.Field>
          <Form.TextArea
            label="About"
            placeholder="message..."
            name="message"
            required
          />

          <Button color="olive" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <div className="contactMe_footer" />
    </div>
  );
}

export default ContactMe;
