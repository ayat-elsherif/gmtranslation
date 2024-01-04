import "./heroslider.scss";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function HeroSlider() {
  const images = [
    { src: "./medical1.jpg", alt: "medical 1", caption: "Slide 1" },
    { src: "./medical2.jpg", alt: "medical 2", caption: "Slide 2" },
    { src: "./medical3.jpg", alt: "medical 3", caption: "Slide 3" },
  ];

  const properties = {
    prevArrow: (
      <button className={"prev_arrow"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className={"next_arrow"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  // const indicators = (index) => (
  //   <div className="indicator">
  //     <img src={`./medical${index + 1}.jpg`} alt={`medical${index + 1}`} />
  //   </div>
  // );
  return (
    <Zoom
      scale={1.4}
      indicators={false}
      {...properties}
      pauseOnHover={false}
      transitionDuration={4000}
    >
      {images.map((image, index) => (
        <>
          <div
            className="each-slide-effect"
            key={index}
            style={{ width: "100%" }}
          >
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${image.src})`,
                // height: "700px",
                width: "100%",
              }}
            ></div>
          </div>
        </>
      ))}
    </Zoom>
  );
}
