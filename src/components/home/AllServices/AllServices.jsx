import { Col, Container, Row } from "react-bootstrap";
import styles from "./allServices.module.scss";

export default function AllServices() {
  return (
    <div className={styles["all_services"]}>
      <Container>
        <Row>
          <Col lg={{ span: 3, offset: 2 }} md={6} sm={12}>
            <div className={styles["service_item"]}>
              <img src="./services/translation.jpg" alt="translation" />
              <h5>Translation</h5>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 1 }} md={6} sm={12}>
            <div className={styles["service_item"]}>
              <img src="./services/proofreading.jpg" alt="proofreading" />
              <h5>Proofreading</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 2 }} md={6} sm={12}>
            <div className={styles["service_item"]}>
              <img src="./services/dtp.jpg" alt="dtp" />
              <h5>DTP</h5>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 1 }} md={6} sm={12}>
            <div className={styles["service_item"]}>
              <img src="./services/transcription.jpg" alt="transcription" />
              <h5>Transcription</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 3, offset: 2 }} md={6} sm={12}>
            <div className={styles["service_item"]}>
              <img src="./services/transcreation.jpg" alt="transcreation" />
              <h5>Transcreation</h5>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 1 }} md={6} sm={12}>
            <div className={styles["service_item"]}>
              <img src="./services/mtpe.jpg" alt="mtpe" />
              <h5>MTPE</h5>
            </div>
          </Col>
        </Row>
        <Row className={`mb-md-4 ${styles["content_creation"]}`}>
          <Col>
            <h2 className="main_title">Content Creation</h2>
            <p>
              We offer content creation services across various fields, with a
              specialized focus on the medical and scientific domains.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
