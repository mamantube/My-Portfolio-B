import { Col, Row, Button } from "react-bootstrap";
import "../assets/css/resume.css";
import pdf from "../assets/my-resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


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
          <Col className=" d-flex justify-content-center align-items-center mt-4">
            {/* <img className="cv-img" src="/img/my-resume.png" alt="" /> */}
            <Document file={pdf} className="d-flex justify-content-center cv-img">
              <Page pageNumber={1} />
            </Document>
          </Col>
          <Row>
            <Col className=" d-flex justify-content-center align-items-center mt-5">
              <Button variant="outline-primary" href={pdf} target="_blank">Download CV</Button>
            </Col>
          </Row>
        </Row>
      </div>
    </section>
  );
}
