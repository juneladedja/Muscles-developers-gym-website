import "./explore.css";
import canyon from "./assets/canyon.jpeg";
import mars from "./assets/mars.png";
import astromare from "./assets/astromare.jpg";
import nettuno from "./assets/neptune.png";
import venere from "./assets/venus.png";
import quadsadv from "./assets/quadsadv.png";

export function Explore({ id }) {
  return (
    <>
      <div className="explore_container" id={id}>
        <div className="containerAllCards">
          <div className="cards">
            <div className="adventures-card canyon">
              <img className="planetpng" src={mars} alt="mars" />
              <h4 id="underline-text">CANYON TENT ADVENTURES </h4>
            </div>

            <div className="adventures-card astromare">
              <img className="planetpng" src={nettuno} alt="neptune" />

              <h4 id="underline-text">
                OCEAN AERIAL TOUR
              </h4>
            </div>

            <div className="adventures-card venere">
              <img className="planetpng" src={venere} alt="venenus" />
              <h4 id="underline-text">
                 THE ALIENS DUNE TOUR
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
