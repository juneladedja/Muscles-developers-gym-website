import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar-div">
          <h3 className="Nebula-span">NEBULA</h3>
        </div>
        <ul className="Nav-ul-container">
          <li className="li-container">Book your trip</li>
          <li className="li-container">Nebula technology</li>
          <li className="li-container">Service center</li>
        </ul>

        <div className="img-container">
          <img src="#" alt="immagine"></img>
        </div>
      </nav>
    </>
  );
}
