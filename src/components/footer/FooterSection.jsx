import { Col, Container, Row } from "react-bootstrap";
import styles from "./footerSection.module.scss";

export default function FooterSection() {
  const svgMap = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-map-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"
      />
    </svg>
  );
  const svgMail = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-envelope-arrow-down-fill"
      viewBox="0 0 16 16"
    >
      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207z" />
      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708l-1.25 1.25Z" />
    </svg>
  );
  return (
    <div className={styles["footer_section"]}>
      <Container>
        <div className={styles["footer_content"]}>
          <Row>
            <Col lg={6}>
              <h4>Contact Us</h4>
              <ul className={styles["contact_info"]}>
                <li>
                  <span>{svgMap}</span> The Fifth Settlement, Cairo - Egypt.
                </li>
                <li>
                  <span>{svgMail}</span> projects@globalmedicaltranslation.com
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <h4>Get Free Quote</h4>
              <p>
                Please contact us via
                <a href="mailto:projects@globalmedicaltranslation.com">email</a>
                , attaching the document you want to translate so we can get
                back to you with a free quote.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      {/* <div className={styles["copyright"]}>
        © Copyright 2024-2025 - <span>Global Medical Translation</span>
      </div> */}
    </div>
  );
}
