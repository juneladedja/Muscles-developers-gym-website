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
import Book from "./Book";
import  Checkout  from "./Checkout";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/homepage" element={<Homepage></Homepage>}></Route>
        <Route path="/book" element={<Book></Book>}> </Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </>
  );
}

export default App;
