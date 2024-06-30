import { Col, Row, Button } from "react-bootstrap";
import "../assets/css/resume.css";
import pdf from "../assets/my-resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";

export default function Resume() {
  return (
    <section>
      <div className=" my-resume">
        <Row>
          <Col className=" d-flex justify-content-center align-items-center mt-5">
            <Slide direction="down">
              <h1>MY RESUME</h1>
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col className=" d-flex justify-content-center align-items-center mt-4">
            <img className="cv-img" src="/img/my-resume.png" alt="" />

            {/* <JackInTheBox>
              <Document
                file={pdf}
                className="d-flex justify-content-center"
              >
                <Page pageNumber={1} />
              </Document>
            </JackInTheBox> */}
          </Col>
          <Row>
            <Col className=" d-flex justify-content-center align-items-center mt-5">
              <Button variant="outline-primary" href={pdf} target="_blank">
                Download CV
              </Button>
            </Col>
          </Row>
        </Row>
      </div>
      <div className="my-certificate mt-5">
        <Row>
          <Col className=" d-flex justify-content-center align-items-center mb-5">
            <h1>MY CERTIFICATE</h1>
          </Col>
        </Row>
        <Row>
          <Col className=" d-flex justify-content-center align-items-center">
            <Slide direction="left">
              <img src="/img/bootcamp-react-fe.jpg" alt="" />
            </Slide>
          </Col>
          <Col className="description">
            <Slide direction="right">
              <p>
                <MdOutlineDoubleArrow /> Introduction to React JS
              </p>
              <p>
                <MdOutlineDoubleArrow /> Mastering Componens in React JS
              </p>
              <p>
                <MdOutlineDoubleArrow /> State and Props in React JS
              </p>
              <p>
                <MdOutlineDoubleArrow /> CRUD and RESTful API
              </p>
              <p>
                <MdOutlineDoubleArrow /> Navigation with React Router
              </p>
              <p>
                <MdOutlineDoubleArrow /> Introduction to State Management with
                Redux
              </p>
            </Slide>
          </Col>
        </Row>
        <Row className=" mt-5">
          <Col className=" d-flex justify-content-center align-items-center">
            <Fade direction="left">
              <img src="/img/course-web-dev-basic.jpg" alt="" />
            </Fade>
          </Col>
          <Col className="description">
            <Fade direction="right">
              <p>
                <MdOutlineDoubleArrow /> Further explore the application of HTML
                in building web page structures
              </p>
              <p>
                <MdOutlineDoubleArrow /> Explore the application of CSS in
                beautifying the appearance of web pages further
              </p>
              <p>
                <MdOutlineDoubleArrow /> Learn layouting techniques using
                Flexbox in building web page content
              </p>
            </Fade>
          </Col>
        </Row>
        <Row className=" mt-5">
          <Col className=" d-flex justify-content-center align-items-center">
            <Fade direction="left">
              <img src="/img/course-fe-basic.jpg" alt="" />
            </Fade>
          </Col >
          <Col className="description">
            <Fade direction="right">
              <p>
                <MdOutlineDoubleArrow /> Learn the application of BOM and DOM on
                web pages
              </p>
              <p>
                <MdOutlineDoubleArrow /> Learn the application of events in
                creating interactivity in HTML elements
              </p>
              <p>
                <MdOutlineDoubleArrow /> Learn useful browser APIs for data
                storage via Web Storage
              </p>
            </Fade>
          </Col>
        </Row>
        <Row className=" mt-5">
          <Col className=" d-flex justify-content-center align-items-center">
            <Fade direction="left">
              <img src="/img/course-JS.jpg" alt="" />
            </Fade>
          </Col>
          <Col style={{ marginTop: "23px" }}>
            <Fade direction="right">
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> Introduction to JavaScript
              </p>
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> Variables, Data types, Looping, Object,
                Array, Map and Set
              </p>
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> Function
              </p>
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> Explain the concept of OOP in
                JavaScript
              </p>
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> Node.Js and IDE
              </p>
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> Module
              </p>
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> Error Handling
              </p>
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> asynchronous
              </p>
              <p style={{ lineHeight: "16px" }}>
                <MdOutlineDoubleArrow /> JavaScript testing
              </p>
            </Fade>
          </Col>
        </Row>
        <Row className=" mt-5">
          <Col className=" d-flex justify-content-center align-items-center">
            <Fade direction="left">
              <img src="/img/course-react-fe-basic.jpg" alt="" />
            </Fade>
          </Col>
          <Col className="description">
            <Fade direction="right">
              <p>
                <MdOutlineDoubleArrow /> Introduction to React JS
              </p>
              <p>
                <MdOutlineDoubleArrow /> Basic Concepts of React
              </p>
              <p>
                <MdOutlineDoubleArrow /> React UI Component
              </p>
              <p>
                <MdOutlineDoubleArrow /> Stateful Component
              </p>
            </Fade>
          </Col>
        </Row>
      </div>
    </section>
  );
}
