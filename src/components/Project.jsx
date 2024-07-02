import {Row, Col, Card} from "react-bootstrap";
import "../assets/css/project.css"

export default function Project() {
    return(
        <div className=" mt-5">
            <Row>
                <Col className=" d-flex justify-content-center align-items-center mb-3">
                    <h1>My Recent Work</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={2}>
                    <Card className=" project-card ">
                        <Card.Img src="/img/car-rent.png" className=" project-img" />
                        <Card.Footer className=" d-flex justify-content-center align-items-center">
                            Car Rent
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}