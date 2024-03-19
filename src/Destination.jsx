import React, { useContext, useEffect, useState } from "react";
import Drop from "./Drop";
import "./Destination.css";
import Planets from "./Planets";
import { GlobalContext } from "./GlobalContext";

function Destination({ id }) {
  const { selectedOption } = useContext(GlobalContext);
  const planetBackgrounds = {
    moon: "moon-background",
    mars: "mars-background",
    venus: "venus-background",
    mercury: "mercury-background",
    jupiter: "jupiter-background",
    saturn: "saturn-background",
    neptune: "neptune-background",
    uranus: "uranus-background",
  };
  const planetBackground = planetBackgrounds[selectedOption] || "none";

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timeoutId = setTimeout(() => {
      setIsActive(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [selectedOption]);

  return (
    <div className="destination-section" id={id}>
      <div className={`destination-container prev-back ${isActive ? "" : "inactive"} ${planetBackground}`}>
        <Drop></Drop>
        <Planets></Planets>
      </div>
    </div>
  );
}

export default Destination;
