import React from "react";
import "./HeroContent.css";

function HeroContent({id}) {
  return (
    <>
      <div className="hero-content" id={id}>
        <div className="star-animation">
          <span className="star-span"></span>
          <span className="star-span"></span>
          <span className="star-span"></span>
          <span className="star-span"></span>
        </div>
      </div>
    </>
  );
}

export default HeroContent;
