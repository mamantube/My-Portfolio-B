import { Row, Col } from "react-bootstrap";
import "../assets/css/home.css";
import emoji from "react-easy-emoji";
import Skillset from "../components/Skillset";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <main>
      <Row className=" d-flex justify-content-center align-items-center min-vh-100">
        <Col className=" p-5">
          <Fade direction="left" duration="1500">
            <h4>Hello Every One, My name</h4>
            <h5 className="my-name">
              Firman <span className="wave-emoji px-2">{emoji("👋")}</span>
            </h5>
            <p>
              A passionate Full Stack Software Developer 🚀 having an experience
              of building Web applications with JavaScript / Reactjs / Nodejs
              and some other cool libraries and frameworks.
            </p>
          </Fade>
        </Col>
        <Col className=" d-flex justify-content-center align-items-center profile--picture">
          <Fade direction="right" duration="1500">
            <Row>
              <Col>
                <img src="img/my-pict2.png" alt="" className="my-picture" />
              </Col>
            </Row>
          </Fade>
        </Col>
      </Row>

      <Skillset />
    </main>
  );
}
