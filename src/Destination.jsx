import React, { useContext, useEffect, useState } from "react";
import Drop from "./Drop";
import "./Destination.css";
import Planets from "./Planets";
import { GlobalContext } from "./GlobalContext";

function Destination({ id }) {
  const { selectedOption } = useContext(GlobalContext);
  const planetBackgrounds = {
    Moon: "moon-background",
    Mars: "mars-background",
    Venus: "venus-background",
    Mercury: "mercury-background",
    Jupiter: "jupiter-background",
    Saturn: "saturn-background",
    Neptune: "neptune-background",
    Uranus: "uranus-background",
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
