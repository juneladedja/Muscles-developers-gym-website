import "./navbar.css";
import Sidebar from "./Sidebar";
import SideContextProvider from "./SideContext";

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
          <h1 className="Nebula-span">Nebula</h1>
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
              Explore
            </a>
          </li>
          <li className="li-container">
            <a
              href="#section3"
              className="li-container underline"
              onClick={(e) => handleLinkClick(e, "section3")}
            >
              Solar System
            </a>
          </li>
          <li className="li-container">
            <a
              href="#section4"
              className="li-container underline"
              onClick={(e) => handleLinkClick(e, "section4")}
            >
              News
            </a>
          </li>
        </ul>
        <SideContextProvider>
          <Sidebar></Sidebar>
        </SideContextProvider>
      </nav>
    </>
  );
}
