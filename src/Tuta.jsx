import astro from "./assets/astro.png"
import "./tuta.css"


export function Tuta(){

    return(
        <>
 <div className="section-tuta">

        <h2 className="titolo-suit"> BIO SUIT 2.0 </h2>

    <div class="main">

        <img class="product__image" src={astro} alt="astro-tuta" />
        <div class="container">
          <div class="title"> THE INNOVATION
            <span> OF OUR NEW SUIT </span>
          </div>

          <p class="desc">
          Explore the frontiers of space with our innovative Astronaut Suit! 
          Designed with utmost precision and cutting-edge technology, 
          our suit offers a perfect blend of safety, comfort, and futuristic style. 
          Crafted with ultra-resistant materials, 
          our suit shields against the extreme elements of space, 
          ensuring thermal insulation, radiation resistance, and protection 
          against micrometeoroids.
          </p>

          <table className="table-tuta">
            <tr>
              <td>50% LIGHTER</td>
              <td> WATERPROOF </td>
              <td> RECYCLED <br/> MATERIALS </td>
              </tr>
          </table>
        </div>

    </div>

 </div>

        </>
    )
}