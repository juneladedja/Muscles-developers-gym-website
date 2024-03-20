import "./ScopridiPiù.css";
import Sampleimg from "./assets/sample.jpg";
import Lancioimg from "./assets/lancio.jpg";

export function ScopridiPiù() {
  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".img-slide");
  const contents = document.querySelectorAll(".content");

  let sliderNav = function (manual) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
  };
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav(i);
    });
  });

  return (
    <>
      <section className="Home">
        <img className="img-slide active" src={Lancioimg}></img>
        <img className="img-slide " src={Sampleimg}></img>
        <img className="img-slide " src={Sampleimg}></img>
        <img className="img-slide " src={Sampleimg}></img>
        <div className="content active">
          <h1>
            lorem<br></br>
            <span>lorem</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
            nostrum sapiente! Maxime autem aliquam saepe porro consectetur odit
            quibusdam alias beatae ut sapiente! Voluptatem omnis cum ipsum quis
            provident.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>
            lorem<br></br>
            <span>lorem</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
            nostrum sapiente! Maxime autem aliquam saepe porro consectetur odit
            quibusdam alias beatae ut sapiente!
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>
            lorem<br></br>
            <span>lorem</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
            nostrum sapiente!
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>
            lorem<br></br>
            <span>lorem</span>
          </h1>
          <p>Lorem</p>
          <a href="#">Read More</a>
        </div>
        <div className="slider-navigation">
          <div className="nav-btn active"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
        </div>
      </section>
    </>
  );
}
