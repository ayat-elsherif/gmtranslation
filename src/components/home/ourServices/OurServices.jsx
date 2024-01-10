import { Col, Container, Row } from "react-bootstrap";
import styles from "./ourServices.module.scss";

export default function OurServices() {
  return (
    <div className={styles["our_services"]}>
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <img src="all-dialects.png" alt="all-dialects-graph" />
          </Col>
          <Col
            // md={{ span: 6 }}
            lg={{ span: 4, offset: 2 }}
            xl={{ span: 4, offset: 4 }}
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
        </Row>
      </Container>
    </div>
  );
}
