import { createContext, useState } from "react";
export const GlobalContext = createContext();


function GlobalProvider({ children }) {
  const [scroll, setScroll] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);
  const [baggages, setBaggages] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [bookings, setBookings] = useState([])

  function log() {
    console.log({
      adults: adults,
      child: child,
      baggages: baggages,
      SelectedOption: selectedOption,
      SelectedDate: String(selectedDate)

    });
  }

  const planetBackgrounds = {
    moon: "linear-gradient(135deg, #4F74C0, #24395C)",
    mars: "linear-gradient(135deg, #D74B4B, #673E3E)",
    venus: "linear-gradient(135deg, #FEB692, #EA5455)",
    mercury: "linear-gradient(135deg, #FFDDE1, #CBEAFD)",
    jupiter: "linear-gradient(135deg, #BDC3C7, #2C3E50)",
    saturn: "linear-gradient(135deg, #F2C94C, #F29C4B)",
    neptune: "linear-gradient(135deg, #65B0EF, #1A2980)",
    uranus: "linear-gradient(135deg, #6EC8F4, #BFE9FF)"
  };

  const value = {
    scroll,
    setScroll,
    adults,
    setAdults,
    child,
    setChild,
    baggages,
    setBaggages,
    selectedOption,
    setSelectedOption,
    showOptions,
    setShowOptions,
    selectedDate,
    setSelectedDate,
    planetBackgrounds,
    bookings,
    setBookings,
    log,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
