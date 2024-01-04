import styles from "App.module.scss";
import css from "./aboutus.module.scss";
import { Container } from "react-bootstrap";
export default function AboutUs() {
  return (
    <div className={styles["inner_page"]}>
      <header>
        <div className={styles["header_img"]}>
          <img src="./aboutUs.jpg" alt="contact us" />
          <div className={styles["overlay"]}></div>
        </div>
        <div className={styles["header_caption"]}>
          About Us <span className={styles["dash_anime"]}>_</span>
        </div>
      </header>
      <main>
        <Container>
          <div className={css["aboutus_brief"]}>
            <h2>About Us</h2>
            <p>
              For over ten years, our team of experienced translators,
              interpreters, editors, and proofreaders has been providing
              comprehensive translation and interpretation services for the
              Arabic language worldwide.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}
