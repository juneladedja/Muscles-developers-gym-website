import "./explore.css"
import canyon from "./assets/canyon.jpeg"
import mars from "./assets/mars.png"
import astromare from "./assets/astromare.jpg"
import nettuno from "./assets/nettuno.png"
import venere from "./assets/venere.png"
import quadsadv from "./assets/quadsadv.png"



export function Explore(){



    return(
        <>
        <div className="contenitore-titolo">
        <h2 className="adventuresTitle"> FEATURE ADVENTURES </h2>
        </div>

        <div className="containerAllCards">

        <div className="cards">

         <div className="adventures-card">
            <img className="canyonmarte" src={canyon} alt="canyon su marte" />
            <div className="overlay">
              <img className="planetpng" src={mars} alt="martepng" />
              <h4> <span id="underline-text"> CANYON TENT </span> ADVENTURES </h4>
              <button className="booknow"> BOOK NOW </button>
            </div>
         </div>

        </div>

        <div className="cards">

         <div className="adventures-card">
            <img className="astromare" src={astromare} alt="astro in mare" />
            <div className="overlay">
              <img className="planetpng" src={nettuno} alt="nettunopng" />
              <h4> <span id="underline-text"> OCEAN AERIAL </span> <br/> TOURS </h4>
              <button className="booknow"> BOOK NOW </button>
            </div>
         </div>
        </div>

        <div className="cards">

         <div className="adventures-card">
            <img className="quads" src={quadsadv} alt="quads su venere" />
            <div className="overlay">
              <img className="planetpng" src={venere} alt="venerepng" />
              <h4> <span id="underline-text"> QUADS DUNE </span><br/> TOUR </h4>
              <button className="booknow"> BOOK NOW </button>
            </div>
         </div>
        </div>

        </div>
        </>
    )
}