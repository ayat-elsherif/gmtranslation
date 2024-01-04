import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";
import HeroSlider from "components/heroSlider/HeroSlider";
import OurAgency from "components/home/OurAgency/OurAgency";
import OurServices from "components/home/ourServices/OurServices";
import AllServices from "components/home/AllServices/AllServices";
import OurIndstries from "components/home/ourIndustries/OurIndustries";
import MakeQuote from "components/home/makeQuote/MakeQuote";
import HeroCaption from "components/heroCaption/HeroCaption";

export default function HomePage() {
  window.scroll(0, 0);
  return (
    <div className={styles["App"]}>
      <header className={styles["App_header"]}>
        <HeroSlider />
        <HeroCaption />
      </header>
      <main>
        <OurAgency />
        <OurServices />
        <MakeQuote />
        <AllServices />
        <OurIndstries />
      </main>
    </div>
  );
}
