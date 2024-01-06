import styles from "./aboutus.module.scss";
import { Container } from "react-bootstrap";
export default function AboutUs() {
  return (
    <div className="inner_page">
      <header>
        <div className="header_img">
          <img src="./aboutUs.jpg" alt="contact us" />
          <div className="overlay"></div>
        </div>
        <div className="header_caption">
          About Us<span className="dash_anime">_</span>
        </div>
      </header>
      <main>
        <Container>
          <div className={styles["aboutus_brief"]}>
            <div className={styles["aboutus_caption"]}>
              <h2>About Us</h2>
              <p>
                For over ten years, our team of experienced translators,
                interpreters, editors, and proofreaders has been providing
                comprehensive translation and interpretation services for the
                Arabic language worldwide.
              </p>
            </div>
            <div className={styles["aboutus_img"]}>
              <img src="./aboutus-graph.jpg" alt="about us graph" />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
