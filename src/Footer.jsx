import "./Footer.css";
import Nasaimg from "./assets/Nasa.png";
import Spaceximg from "./assets/Spacex.png";
import Googleimg from "./assets/google.png";

export function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <h6>Nebula</h6>
      </div>
      <div className="social_icons">
      <h3 className="Icons-title">Follow us</h3>
        <a href="#">
        <i className="fa-brands fa-meta"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
        <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>

      <div className="footer_links">
        <ul className="contact-links">
          <h3>Contact us</h3>
          <br></br>
          <li>
            <a href="#">Customer care</a>
          </li>
          <li>
            <a href="#">Service guarantee</a>
          </li>
          <li>
            <a href="#">Other service information</a>
          </li>
          <li>
            <a href="#">Site Feedback</a>
          </li>
        </ul>
        <ul className="Nebula.com-links">
          <h3>Nebula.com</h3>
          <br></br>
          <li>
            <a href="#">Who we are?</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Work with us</a>
          </li>
          <li>
            <a href="#">General conditions</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Nebula.com group</a>
          </li>
        </ul>

        <ul>
          <h3>Other services</h3>
          <br></br>
          <li>
            <a href="#">Investor relations</a>
          </li>
          <li>
            <a href="#">Nebula.com Rewards</a>
          </li>
          <li>
            <a href="#">Partner</a>
          </li>
          <li>
            <a href="#">Add your trip</a>
          </li>
          <li>
            <a href="#">Safety</a>
          </li>
        </ul>
      </div>

      <div className="partners">
        <div className="Partners-container">
          <div className="Logos-partners">
            <h3 className="partners-title">Our partners</h3>
            <img className="Googleimg" src={Googleimg}></img>
            <img className="Nasaimg" src={Nasaimg}></img>
            <img className="Spaceximg" src={Spaceximg}></img>
          </div>
        </div>
      </div>

      <div className="footer_copy">
        <p>&copy;2024 Nebula.com™. All rights reserved.</p>
      </div>
    </footer>
  );
}
