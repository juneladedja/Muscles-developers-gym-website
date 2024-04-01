import "./explore.css";
import canyon from "./assets/canyon.jpeg";
import mars from "./assets/Mars.png";
import astromare from "./assets/astromare.jpg";
import nettuno from "./assets/Neptune.png";
import venere from "./assets/Venus.png";
import quadsadv from "./assets/quadsadv.png";
import {GlobalContext} from "./GlobalContext";
import { useState, useEffect, useContext } from "react";



export function Explore({ id }) {
  const { setIsVisible2, isVisible2 } = useContext(GlobalContext);

  useEffect(() => {
    const handleScroll = () => {
      // Ottieni l'elemento
      const element = document.getElementById("section2");
  
      // Verifica se l'elemento esiste
      if (element) {
        // Calcola la posizione dell'elemento rispetto al top della finestra
        const elementTop = element.getBoundingClientRect().top;
  
        // Calcola l'altezza dell'elemento
        const elementHeight = element.offsetHeight;
  
        // Verifica se l'elemento è completamente visibile o solo parzialmente visibile
        const isCompletelyVisible = elementTop >= 0 && elementTop + elementHeight <= window.innerHeight;
        const isPartiallyVisible = elementTop < window.innerHeight && elementTop + elementHeight > 0;
  
        // Imposta isVisible a true se l'elemento è completamente visibile o solo parzialmente visibile, altrimenti a false
        setIsVisible2(isCompletelyVisible || isPartiallyVisible);
      }
    };
  
    // Aggiungi l'event listener per lo scroll
    window.addEventListener("scroll", handleScroll);
  
    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
      

  return (
    <>
      <div className="explore_container" id={id}>
        <div className="containerAllCards">
          <div className="cards">
            <div className="adventures-card canyon">
              <img className="planetpng" src={mars} alt="mars" />
              <h4 id="underline-text">CANYON TENT ADVENTURES </h4>
            </div>

            <div className="adventures-card astromare">
              <img className="planetpng" src={nettuno} alt="neptune" />

              <h4 id="underline-text">
                OCEAN AERIAL TOUR
              </h4>
            </div>

            <div className="adventures-card venere">
              <img className="planetpng" src={venere} alt="venenus" />
              <h4 id="underline-text">
                 THE ALIENS DUNE TOUR
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
