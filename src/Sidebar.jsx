import React, { useContext, useState } from "react";
import "./sidebar.css";
import Profile from "./Profile";
import { SideContext } from "./SideContext";
import Book from "./Book";

function Sidebar() {
  // const { showProfile, setShowProfile } = useContext(SideContext);
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);
  const [book, setBook] = useState(false)
  const [showSide, setShowSide] = useState(false)

  // const toggleSide = () => {
  //   setShowSide(!showSide)
  // }

  const toggleProfile = () => {
    // setShowProfile(!showProfile);
    setExpanded(()=>!expanded);

    setTimeout(() => {
      setReady(!ready);
    }, 400);
  };

  // const [showBook, setShowBook] = useState(false)
  // const [readyBook, setReadyBook] = useState(false)


  // const toggleBook = () => {
  //   setShowBook(!showBook)
  //   setReadyBook(!readyBook)

  // }

  return (
    <>
      <label htmlFor="menu-control" className="hamburger">
        <i className="hamburger__icon"></i>
        <i className="hamburger__icon"></i>
        <i className="hamburger__icon"></i>
      </label>

      <input type="checkbox" id="menu-control" className="menu-control" />

      {/* <aside className={`${showSide ? "sidebar" : "sidebar__close" }`}> */}
      <aside className="sidebar">
        <nav className="sidebar__menu">
          <button onClick={toggleProfile}><span className="underline">Profile</span></button>
          <button><span className="underline">My bookings</span></button>
          <button><span className="underline">Privacy Policy</span></button>
          <button><span className="underline">Contacts</span></button>
        </nav>

        <label htmlFor="menu-control" className="sidebar__close"></label>
      </aside>
      <Profile
        expanded={expanded}
        setExpanded={setExpanded}
        ready={ready}
        setReady={setReady}
      ></Profile>
      <Book 
      // showBook={showBook}
      // setShowBook={setShowBook}
      // readyBook={readyBook}
      // setReadyBook={setReadyBook}
      
      >
        
      </Book>
    </>
  );
}

export default Sidebar;
