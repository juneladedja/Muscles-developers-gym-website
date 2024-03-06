import React from "react";
import "./solar-system.css";
import "./App.css";

function SolarSystem({ id }) {
  return (
    <>
      <div id={id} className="over-solar-system">
        <div className="solar-system-container">
          <iframe className="iframe"
            scrolling="no"
            title="Solar System  Animation"
            src="https://codepen.io/JSter91/embed/ZEZzgEr"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default SolarSystem;
