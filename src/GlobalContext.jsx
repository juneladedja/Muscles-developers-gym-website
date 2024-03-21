import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [scroll, setScroll] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);
  const [baggages, setBaggages] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const [showOptions, setShowOptions] = useState(false);

  const [bookings, setBookings] = useState([]);
  const [scrollBlocked, setScrollBlocked] = useState(false);

  // useEffect(() => {
  //   // Carica le prenotazioni dal localStorage quando il componente viene montato
  //   const savedBookings = localStorage.getItem("bookings");
  //   if (savedBookings) {
  //     setBookings(JSON.parse(savedBookings));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Salva le prenotazioni nel localStorage ogni volta che bookings viene aggiornato
  //   localStorage.setItem("bookings", JSON.stringify(bookings));
  // }, [bookings]);

  function log() {
    console.log({
      adults: adults,
      child: child,
      baggages: baggages,
      SelectedOption: selectedOption,
      SelectedDate: String(selectedDate),
    });
  }

  function bookDestination(newBooking) {
    setBookings((bookings) => [...bookings, newBooking]);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    console.log(bookings);
  }

  useEffect(() => {
    console.log(bookings);
    setTimeout(() => {
      console.log("settimeout");
      console.log(bookings);
    }, 3000);
  }, [bookings]);
  const planetBackgrounds = {
    moon: "linear-gradient(135deg, #4F74C0, #24395C)",
    mars: "linear-gradient(135deg, #D74B4B, #673E3E)",
    venus: "linear-gradient(135deg, #FEB692, #EA5455)",
    mercury: "linear-gradient(135deg, #FFDDE1, #CBEAFD)",
    jupiter: "linear-gradient(135deg, #BDC3C7, #2C3E50)",
    saturn: "linear-gradient(135deg, #F2C94C, #F29C4B)",
    neptune: "linear-gradient(135deg, #65B0EF, #1A2980)",
    uranus: "linear-gradient(135deg, #6EC8F4, #BFE9FF)",
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
    scrollBlocked,
    setScrollBlocked,
    bookDestination,
    totalPrice,
    setTotalPrice,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
