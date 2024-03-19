import { Route, Routes } from "react-router-dom";
import "./App.css";
import Experience from "./Experience";
import HeroContent from "./HeroContent";
import { Navbar } from "./Navbar";
import News from "./News";
import SolarSystem from "./SolarSystem";
import Star from "./Star";
import Homepage from "./Homepage";
import LandingPage from "./LandingPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const scrollTo100vh = () => {
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); // Scorrere verso il basso di 100vh
      }, 3000); // Attendere 3 secondi
    };

    // Chiamata alla funzione al caricamento del componente
    scrollTo100vh();
  }, []); // useEffect si attiva solo al montaggio del componente

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/homepage" element={<Homepage></Homepage>}></Route>
      </Routes>
      {/* <Navbar />
      <HeroContent id="section1">
        <Star></Star>
      </HeroContent>
      <Experience></Experience>
      <SolarSystem id="section2"></SolarSystem>
      <News id="section3"></News> */}
    </>
  );
}

export default App;
