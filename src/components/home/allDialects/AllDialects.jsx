import { Container } from "react-bootstrap";
import styles from "./allDialects.module.scss";

export default function AllDialects() {
  return (
    <div className={styles["make_quote"]}>
      <Container>
        <div className={styles["free_quote"]}></div>
      </Container>
    </div>
  );
}
