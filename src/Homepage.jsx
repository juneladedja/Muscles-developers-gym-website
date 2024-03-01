import React from "react";
import { Navbar } from "./Navbar";
import HeroContent from "./HeroContent";
import Experience from "./Experience";
import SolarSystem from "./SolarSystem";
import News from "./News";

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroContent id="section1">
        <Star></Star>
      </HeroContent>
      <Experience></Experience>
      <SolarSystem id="section2"></SolarSystem>
      <News id="section3"></News>
    </>
  );
}

export default Homepage;
