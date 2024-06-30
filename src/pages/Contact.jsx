import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} from "../utils/Unpublished";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import "../assets/css/contact.css";
import { Bounce } from "react-awesome-reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const params = {
      from_name: name,
      email_id: email,
      message: message,
    };

    emailjs
      .send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        params,
        VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("ress", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <section className="justify-content-center align-items-center">
      {/* <Row>
        <Col className=" d-flex justify-content-center align-items-center mb-5"><h1>GET IN TOUCH</h1></Col>
      </Row> */}
      <Row>
        <Col xs="12" md="6" className=" d-flex justify-content-center align-items-center">
          <Bounce>
            <img
              className=" d-flex justify-content-center align-items-center mail-img"
              src="/img/sendmail.png"
              alt=""
            />
          </Bounce>
        </Col>
        <Col xs="12" md="6" className=" d-flex justify-content-center align-items-center" >
          <Bounce>
            <Card className=" contact-form">
              <Card.Title className=" d-flex justify-content-center align-items-center pt-5">
                <h3>Contact Me</h3>
              </Card.Title>
              <Card.Body>
                <Form onSubmit={sendEmail}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      value={name}
                      placeholder="What's Your Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                      className=" border-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email_id"
                      placeholder="What's Your Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className=" border-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows="3"
                      placeholder="Your Message Here....."
                      required
                      onChange={(e) => setMessage(e.target.value)}
                      className=" border-2"
                    />
                  </Form.Group>
                  <Button type="submit">Send Message</Button>
                </Form>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
      </Row>
    </section>
  );
}
