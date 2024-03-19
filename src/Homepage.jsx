import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import HeroContent from "./HeroContent";
import SolarSystem from "./SolarSystem";
import News from "./News";
import Star from "./Star";
// import ActiveSlider from "./ActiveSlider";
import { Footer } from "./Footer";
import { Explore } from "./Explore";
import "./HomePage.css"
import Destination from "./Destination";



function Homepage() {
  useEffect(() => {
    const scrollTo100vh = () => {
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }, 3000);
    };

    scrollTo100vh();
  }, []); // 
  return (
    <>

    <div className="homePage">

      <Navbar />
      <HeroContent>
        <Star></Star>
      </HeroContent>
      {/* <ActiveSlider id="section1"></ActiveSlider> */}
      <Destination id="section1"></Destination>
      <Explore id="section2"></Explore>
      <SolarSystem id="section3"></SolarSystem>
      <News id="section4"></News>
      <Footer></Footer>
      </div>

    </>
  );
}

export default Homepage;
