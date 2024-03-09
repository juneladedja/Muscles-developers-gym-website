import React from "react";
import { Navbar } from "./Navbar";
import HeroContent from "./HeroContent";
import Experience from "./Experience";
import SolarSystem from "./SolarSystem";
import News from "./News";
import Star from "./Star";
import ActiveSlider from "./ActiveSlider";
import { Footer } from "./Footer";


function Homepage() {
  return (
    <>
      <Navbar />
      <HeroContent id="section1">
        <Star></Star>
      </HeroContent>
      <ActiveSlider></ActiveSlider>
      <Experience></Experience>
      <SolarSystem id="section2"></SolarSystem>
      <News id="section3"></News>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
