import { Col, Container, Row } from "react-bootstrap";
import styles from "./ourServices.module.scss";

export default function OurServices() {
  return (
    <div className={styles["our_services"]}>
      <Container>
        <Row className="align-items-center">
          <Col
            // md={{ span: 6 }}
            xl={5}
            lg={5}
          >
            <h2 className="main_title">Our Services</h2>
            <ul>
              <li>• Translation</li>
              <li>• Proofreading</li>
              <li>• Desktop Publishing Services (DTP).</li>
              <li>• Machine Translation Post-Editing (MTPE) services.</li>
              <li>• Transcription</li>
              <li>• Transcreation</li>
              <li>• Content creation</li>
            </ul>
          </Col>
          <Col lg={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 2 }}>
            <img src="all-dialects.png" alt="all-dialects-graph" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
