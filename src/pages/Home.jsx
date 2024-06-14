import { Row, Col } from "react-bootstrap";
import "../assets/css/home.css";
import emoji from "react-easy-emoji";
import Skillset from "../components/Skillset";

export default function Home() {
  return (
    <main>
      <Row className=" d-flex justify-content-center align-items-center">
        <Col className=" p-5">
          <h4>Hello Every One, My name</h4>
          <h5 className="my-name">
            Firman <span className="wave-emoji px-2">{emoji("👋")}</span>
          </h5>
          <p>
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web applications with JavaScript / Reactjs / Nodejs and
            some other cool libraries and frameworks.
          </p>
        </Col>
        <Col className=" d-flex justify-content-center align-items-center profile--picture">
          <div className=" align-content-center my--card">
            <div className=" card--body">
              <Row>
                <Col>
                  <img className="card--image" src="/img/my-pict.jpg" alt="" />
                </Col>
              </Row>
              <Row>
                <Col className="social--media">
                  <a href="">
                    <img src="/img/youtube.png" alt="" />
                  </a>
                  <a href="">
                    <img src="/img/instagram.png" alt="" />
                  </a>
                  <a href="">
                    <img src="/img/github.png" alt="" />
                  </a>
                  <a href="">
                    <img src="/img/linkedin.png" alt="" />
                  </a>
                  <a href="">
                    <img src="/img/gmail.png" alt="" />
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Skillset />
    </main>
  );
}
