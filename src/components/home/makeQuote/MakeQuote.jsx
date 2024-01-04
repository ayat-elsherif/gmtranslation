import { Container } from "react-bootstrap";
import styles from "./makeQuote.module.scss";

export default function MakeQuote() {
  const handleButtonClick = () => {
    const emailAddress = "projects@globalmedicaltranslation.com";
    const subject = "A New Quote";
    const body = "Please FEEL FREE to send us your questions & inquiries";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };

  return (
    <div className={styles["make_quote"]}>
      <Container>
        <div className={styles["free_quote"]}>
          <h4 className="d-none d-md-block">
            Feel free to Contact us
            <br /> and get your <strong>Free Quote</strong>
          </h4>
          <h4 className="d-block d-md-none">
            Contact us,
            <br /> <strong>Free Quote</strong>
          </h4>
          <span onClick={handleButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-arrow-down"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708l-1.25 1.25Z" />
            </svg>{" "}
          </span>
        </div>
      </Container>
    </div>
  );
}
