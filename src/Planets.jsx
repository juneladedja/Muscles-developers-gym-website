import React, { useContext, useEffect, useState } from "react";
import "./Planets.css";
import { GlobalContext } from "./GlobalContext";

import moon from "./assets/moon.png";
import mars from "./assets/mars.png";
import jupiter from "./assets/jupiter.png";
import mercury from "./assets/mercury.png";
import saturn from "./assets/saturn.png";
import neptune from "./assets/neptune.png";
import uranus from "./assets/uranus.png";
import venus from "./assets/venus.png";
import placeholderImage from "./assets/Daco.png";

const planetArr = [
  moon,
  mars,
  venus,
  mercury,
  jupiter,
  saturn,
  neptune,
  uranus,
];

/* ----------------------------------------------- */
function Planets() {
  const [isSelected, setIsSelected] = useState(false);

  const { selectedOption } = useContext(GlobalContext);

  const isEmptySelection = !selectedOption;
  const planetIndex = selectedOption
    ? planetArr.findIndex((planet) => planet.includes(selectedOption))
    : -1;

  const planetImage = isEmptySelection
    ? placeholderImage
    : planetIndex !== -1
    ? planetArr[planetIndex]
    : null;

  useEffect(() => {
    setIsSelected(() => false); 
    setTimeout(() => {
      setIsSelected(() => true);
    }, 300);
  }, [selectedOption]);

  const planetSlide = isSelected
    ? "planet-viewer planet-slide "
    : "planet-viewer";
  const planetOpacity = isSelected ? "planet-opacity-1" : "planet-opacity-0";

  return (
    <div className="planets-container">
      <div className={planetOpacity}>
        <img
          className={planetSlide}
          src={planetImage}
          alt={selectedOption || "No planet selected"}
        />
      </div>
      <h5 className="planet-name">{selectedOption || "Nebula "}</h5>{" "}
    </div>
  );
}

export default Planets;
