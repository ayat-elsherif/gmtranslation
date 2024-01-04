import { Container } from "react-bootstrap";
import styles from "./ourAgency.module.scss";
export default function OurAgency() {
  return (
    <div className={styles["our_agency"]}>
      <Container>
        <h2>Our Agency</h2>
        <p>
          For over ten years, our team of experienced translators, interpreters,
          editors, and proofreaders has been providing comprehensive translation
          and interpretation services for the Arabic language worldwide.
        </p>
      </Container>
    </div>
  );
}