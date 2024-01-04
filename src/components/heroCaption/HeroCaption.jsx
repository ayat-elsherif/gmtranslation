import styles from "./heroSection.module.scss";

export default function HeroCaption() {
  return (
    <div className={styles["hero_section"]}>
      <h1>Global Medical Translation</h1>
      <p class={styles["hero_slogan"]}>We bring words to the light</p>
    </div>
  );
}
