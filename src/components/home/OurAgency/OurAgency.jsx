import { Col, Container, Row } from "react-bootstrap";
import styles from "./ourAgency.module.scss";
export default function OurAgency() {
  return (
    <div className={styles["our_agency"]}>
      <Container>
        <Row className={"justify-content-between align-items-center"}>
          <Col xl={{ span: 5 }} lg={4}>
            <img src="./our-agency.jpg" alt="our agency" />
          </Col>
          <Col xl={{ span: 6, offset: 0 }} lg={{ span: 7, offset: 1 }}>
            {" "}
            <h2 className="main_title">Our Agency</h2>
            <p>
              For over ten years, our team of experienced translators,
              interpreters, editors, and proofreaders has been providing
              comprehensive translation and interpretation services for{" "}
              <strong>the Arabic language worldwide.</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
