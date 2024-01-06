import { Container } from "react-bootstrap";
import styles from "./contactUs.module.scss";
export default function ContactUs() {
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
    <div className="inner_page">
      <header>
        <div className="header_img">
          <img src="./contactUs.jpg" alt="contact us" />
          <div className="overlay"></div>
        </div>
        <div className="header_caption">
          Contact Us<span className="dash_anime">_</span>
        </div>
      </header>
      <main>
        <Container>
          <div className={styles["contactus_brief"]}>
            <div className={styles["contactus_caption"]}>
              <h2>Contact Us</h2>
              <ul className={styles["contact_info"]}>
                <li>
                  <span>{svgMap}</span> Cairo - 5th Settlements.
                </li>
                <li>
                  <span>{svgMail}</span> projects@globalmedicaltranslation.com
                </li>
              </ul>
            </div>
            <div className={styles["contactus_img"]}>
              {/* <img src="./contactus-graph.jpg" alt="about us graph" /> */}
              <span className="d-none d-lg-block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27641.276024654475!2d31.40567661035921!3d30.003576111325735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cc75436d909%3A0x7f921d4528ec3e03!2sThe%205th%20Settlement%2C%20New%20Cairo%201%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1704573557181!5m2!1sen!2seg"
                  width="550"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="bigScreem"
                ></iframe>
              </span>
              <span className="d-block d-lg-none">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27641.276024654475!2d31.40567661035921!3d30.003576111325735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cc75436d909%3A0x7f921d4528ec3e03!2sThe%205th%20Settlement%2C%20New%20Cairo%201%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1704573557181!5m2!1sen!2seg"
                  width="350"
                  height="350"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="smallScreen"
                ></iframe>
              </span>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
