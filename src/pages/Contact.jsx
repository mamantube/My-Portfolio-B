import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} from "../utils/Unpublished";
import { Button, Form } from "react-bootstrap";

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
    <Form onSubmit={sendEmail}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={name}
          placeholder="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          name="email_id"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          name="message"
          rows="3"
          placeholder="message"
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
