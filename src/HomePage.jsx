import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import HeroSlider from "components/heroSlider/HeroSlider";
import OurAgency from "components/home/OurAgency/OurAgency";
import OurServices from "components/home/ourServices/OurServices";
import AllServices from "components/home/AllServices/AllServices";
import OurIndstries from "components/home/ourIndustries/OurIndustries";
import MakeQuote from "components/home/makeQuote/MakeQuote";
import HeroCaption from "components/heroCaption/HeroCaption";
import AllDialects from "components/home/allDialects/AllDialects";

export default function HomePage() {
  window.scroll(0, 0);
  return (
    <div className="App">
      <header className="App_header">
        <HeroSlider />
        <HeroCaption />
      </header>
      <main>
        <OurAgency />
        <OurServices />
        <AllDialects />
        <AllServices />
        <MakeQuote />
        <OurIndstries />
      </main>
    </div>
  );
}
