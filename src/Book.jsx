import React, { useContext, useEffect, useState } from "react";
import "./Book.css";
import { GlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

function Book() {
  const { bookings, setBookings, setScrollBlocked } = useContext(GlobalContext);

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
    const updatedBookingsState = [...bookings];
    updatedBookingsState.splice(index, 1);
    setBookings(updatedBookingsState);
  }
  const navigateToHome = useNavigate();
  function backToHome() {
    setScrollBlocked(false);
    navigateToHome("../homepage");
  }

  const checkout = useNavigate();
  function goToPayment() {
    checkout("../checkout");
  }

  function calculateTotal() {
    let total = 0;
    savedBookings.forEach((booking) => {
      total += booking.totalPrice;
    });
    return total;
  }
  return (
    <>
      <div className="book-container">
        <div className="book">
          <h2>My Books</h2>
          {savedBookings.length === 0 ? (
            <p>No books</p>
          ) : (
            <>
              <ul className="book-list">
                {savedBookings.map((booking, index) => (
                  <li className="book-item" key={index}>
                    <strong>adults : {booking.adults}</strong>
                    <strong>children : {booking.child}</strong>
                    <strong>adults : {booking.baggages}</strong>
                    <strong>destination : {booking.selectedOption}</strong>
                    <strong>selected date : {booking.selectedDate}</strong>
                    <strong>price: : {booking.totalPrice}</strong>
                    <button onClick={() => deleteItem(index)}>delete</button>
                  </li>
                ))}
              </ul>
              <div className="total-resume">
                <p>Total : {calculateTotal()} </p>
              </div>
            </>
          )}

          <div className="btn-container-book">
            <button onClick={backToHome}>back</button>
            <button onClick={goToPayment} disabled={savedBookings.length === 0}>
              proceed to payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
