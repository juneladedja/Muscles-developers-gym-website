import React, { useContext, useEffect, useState } from "react";
import "./Book.css";
import { GlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

function Book() {
  // const { bookings, setBookings } = useContext(GlobalContext);

  const [savedBookings, setSavedBookings] = useState([]);

  useEffect(() => {
    const savedBookingsFromLocalStorage = JSON.parse(
      localStorage.getItem("bookings")
    );
    if (savedBookingsFromLocalStorage) {
      setSavedBookings(savedBookingsFromLocalStorage);
    }
    console.log(savedBookings);
  }, []);

  function deleteItem(index) {
    const updatedBookings = [...savedBookings];
    updatedBookings.splice(index, 1);
    setSavedBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    // setBookings(() => updatedBookings);
  }
  const navigateToHome = useNavigate();
  function backToHome() {
    navigateToHome("../homepage");
  }

  const checkout = useNavigate();
  function goToPayment() {
    checkout("../checkout");
  }
  return (
    <>
      <div className="book-container">
        <div className="book">
          <h2>My Books</h2>

          <ul className="book-list">
            {savedBookings.map((booking, index) => (
              <li className="book-item" key={index}>
                <strong>adults : {booking.adults}</strong>
                <strong>children : {booking.child}</strong>
                <strong>adults : {booking.baggages}</strong>
                <strong>destination : {booking.selectedOption}</strong>
                <strong>selected date : {booking.selectedDate}</strong>
                <button onClick={() => deleteItem(index)}>delete</button>
              </li>
            ))}
          </ul>
          <button onClick={backToHome}>back</button>
          <button onClick={goToPayment}>proceed to payment</button>
        </div>
      </div>
    </>
  );
}

export default Book;
