/* eslint-disable no-undef */
import "../assets/css/resume.css";
import { Row, Col } from "react-bootstrap";
// import myresume from "../assets/my-resume.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Resume() {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <section>
      <Row>
        <Col className=" d-flex justify-content-center align-items-center">
          <h1>MY RESUME</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <Document file="../assets/my-resume.pdf" className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Col>
      </Row>
      <Row>
        <Col className=" d-flex justify-content-center align-items-center">
          <h1>CERTIFICATION</h1>
        </Col>
      </Row>
    </section>
  );
}
