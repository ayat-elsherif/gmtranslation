import { Container } from "react-bootstrap";
import styles from "./ourServices.module.scss";

export default function OurServices() {
  return (
    <div className={styles["our_services"]}>
      <Container>
        <h2>Our Services</h2>
        <ul>
          <li>• Translation</li>
          <li>• Proofreading</li>
          <li>• Desktop Publishing Services (DTP).</li>
          <li>• Machine Translation Post-Editing (MTPE) services.</li>
          <li>• Transcription</li>
          <li>• Transcreation</li>
          <li>• Content creation</li>
        </ul>
      </Container>
    </div>
  );
}
