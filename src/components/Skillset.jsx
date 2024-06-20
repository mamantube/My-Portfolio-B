import { Row, Col } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
} from "react-icons/di";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { SiExpress, SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import "../assets/css/skillset.css";
import { Fade, Slide } from "react-awesome-reveal";

export default function Skillset() {
  return (
    <>
      <Row>
        <Col xs={12} lg={6}>
          <Fade direction="left" duration="1500">
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
              <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
              </Col>
            </Row>
          </Fade>
        </Col>
        <Col xs={12} lg={6}>
          <Fade direction="right" duration="1500">
            <Row className=" mt-5">
              <Col className=" d-flex justify-content-center align-items-center">
                <h1>WHAT I DO</h1>
              </Col>
            </Row>
            <Row className=" mt-5">
              <Col className=" d-flex justify-content-center align-items-center">
                <p>
                  {" "}
                  CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH
                  STACK
                </p>
              </Col>
              <Row>
                <Col className=" i-do">
                  <Slide direction="up" duration="4000">
                    <p>
                      <MdOutlineDoubleArrow /> Develop highly interactive Front
                      end / User Interfaces for your web
                    </p>
                  </Slide>
                  <Slide direction="up" duration="4000">
                    <p>
                      <MdOutlineDoubleArrow /> Integration of third party
                      services such Cloudinary and Midtrans
                    </p>
                  </Slide>
                  <Slide direction="up" duration="4000">
                    <p>
                      <MdOutlineDoubleArrow /> Build reliable and scalable
                      back-end systems for your web applications
                    </p>
                  </Slide>
                </Col>
              </Row>
            </Row>
          </Fade>
        </Col>
      </Row>
    </>
  );
}
