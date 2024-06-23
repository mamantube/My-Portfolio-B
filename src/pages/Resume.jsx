import { Col, Row } from "react-bootstrap";
import "../assets/css/resume.css";

export default function Resume() {
  return (
    <section>
      <div>
        <Row>
          <Col className=" d-flex justify-content-center align-items-center mt-5">
            <h1>MY RESUME</h1>
          </Col>
        </Row>
        <Row>
          <Col className=" d-flex justify-content-center align-items-center mt-5">
            <img className="cv-img" src="/img/my-resume.png" alt="" />
          </Col>
        </Row>
      </div>
    </section>
  );
}
