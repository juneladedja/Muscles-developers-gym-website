import astro from "./assets/astro.png";
import "./tuta.css";

export function Tuta() {
  return (
    <>
      <div className="section-tuta">
        <h2 className="titolo-suit"> BIO SUIT 2.0 </h2>

        <div className="main">
          <img className="product__image" src={astro} alt="astro-tuta" />
          <div className="tuta-container">
            <div className="title">
              THE INNOVATION
              <span> OF OUR NEW SUIT </span>
              <p className="desc">
                Explore the frontiers of space with our innovative Astronaut
                Suit! Designed with utmost precision and cutting-edge
                technology, our suit offers a perfect blend of safety, comfort,
                and futuristic style. Crafted with ultra-resistant materials,
                our suit shields against the extreme elements of space, ensuring
                thermal insulation, radiation resistance, and protection against
                micrometeoroids.
              </p>
              <div className="table-tuta">
                <p className="lighter">50% LIGHTER WATERPROOF </p>
                <p className="recycled">RECYCLED MATERIALS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
