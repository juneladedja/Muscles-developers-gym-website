import React from "react";
import "./solar-system.css";
import "./App.css"

function SolarSystem({ id }) {
  return (
    <>
      <div id={id} className="over-solar-system"></div>
      <div className="solar-system-container">
        <iframe
          scrolling="no"
          title="Solar System  Animation"
          src="https://codepen.io/JSter91/embed/ZEZzgEr"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
      </div>
    </>
  );
}

export default SolarSystem;
