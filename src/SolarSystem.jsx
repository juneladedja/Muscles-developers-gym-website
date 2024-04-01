import React from "react";
import "./solar-system.css";
import "./App.css";
import { GlobalContext } from "./GlobalContext";
import { useState, useEffect, useContext } from "react";

function SolarSystem({ id }) {
  const { setIsVisible3 } = useContext(GlobalContext);

  useEffect(() => {
    const handleScroll = () => {
      // Ottieni l'elemento
      const element = document.getElementById("section3");

      // Verifica se l'elemento esiste
      if (element) {
        // Calcola la posizione dell'elemento rispetto al top della finestra
        const elementTop = element.getBoundingClientRect().top;

        // Calcola l'altezza dell'elemento
        const elementHeight = element.offsetHeight;

        // Verifica se l'elemento è completamente visibile o solo parzialmente visibile
        const isCompletelyVisible =
          elementTop >= 0 && elementTop + elementHeight <= window.innerHeight;
        const isPartiallyVisible =
          elementTop < window.innerHeight && elementTop + elementHeight > 0;

        // Imposta isVisible a true se l'elemento è completamente visibile o solo parzialmente visibile, altrimenti a false
        setIsVisible3(isCompletelyVisible || isPartiallyVisible);
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
      <div id={id} className="over-solar-system">
        <div className="solar-system-container">
          <iframe
            className="iframe"
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
