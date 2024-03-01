import { Routes } from "react-router-dom";
import "./App.css";
import Experience from "./Experience";
import HeroContent from "./HeroContent";
import { Navbar } from "./Navbar";
import News from "./News";
import SolarSystem from "./SolarSystem";
import Star from "./Star";

function App() {
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

export default App;
