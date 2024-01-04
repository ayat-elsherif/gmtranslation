import styles from "App.module.scss";

export default function AboutUs() {
  return (
    <div className={styles["inner_page"]}>
      <header>
        <div className={styles["header_img"]}>
          <img src="./contactUs.jpg" alt="contact us" />
          <div className={styles["overlay"]}></div>
        </div>
        <div className={styles["header_caption"]}>
          About Us <span className={styles["dash_anime"]}>_</span>
        </div>
      </header>
    </div>
  );
}
