import "./navbar.css";
import Sidebar from "./Sidebar";

export function Navbar() {
  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar-div">
          <h2 className="Nebula-span">NEBULA</h2>
        </div>
        <ul className="Nav-ul-container">
          <li className="li-container">
            <a
              href="#section1"
              className="li-container underline"
              onClick={(e) => handleLinkClick(e, "section1")}
            >
              Book your trip
            </a>
          </li>
          <li className="li-container">
            <a
              href="#section2"
              className="li-container underline"
              onClick={(e) => handleLinkClick(e, "section2")}
            >
              The Solar System
            </a>
          </li>
          <li className="li-container">
            <a
              href="#section3"
              className="li-container underline"
              onClick={(e) => handleLinkClick(e, "section3")}
            >
              News
            </a>
          </li>
        </ul>
        <Sidebar></Sidebar>
      </nav>
    </>
  );
}
