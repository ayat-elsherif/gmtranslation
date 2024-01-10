import { Container } from "react-bootstrap";
import styles from "./allDialects.module.scss";

export default function AllDialects() {
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
        <div className={styles["free_quote"]}></div>
      </Container>
    </div>
  );
}
