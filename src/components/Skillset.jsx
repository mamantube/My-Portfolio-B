import { Row, Col } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiCss3
  } from "react-icons/di";
  import { SiExpress } from "react-icons/si";
  import { FaBootstrap } from "react-icons/fa";
  import "../assets/css/skillset.css"

export default function Skillset() {
  return (
    <>
      <Row className=" mt-5">
        <Col className=" d-flex justify-content-center align-items-center">
          <h1>MY SKILL</h1>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaBootstrap />
        </Col>
      </Row>
    </>
  );
}
