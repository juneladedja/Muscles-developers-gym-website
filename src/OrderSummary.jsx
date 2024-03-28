import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ billingData }) => {
  const returnAtHome = useNavigate();

  function returnToHome() {
    returnAtHome("/homepage");
  }
  const [savedBookingsSummary, setSavedBookingsSummary] = useState([]);

  useEffect(() => {
    const savedBookingsFromLocalStorage = JSON.parse(
      localStorage.getItem("bookings")
    );
    if (savedBookingsFromLocalStorage) {
      setSavedBookingsSummary(savedBookingsFromLocalStorage);
    }
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    savedBookingsSummary.forEach((booking) => {
      totalPrice += booking.totalPrice;
    });
    return totalPrice;
  };

  const [purchased, setPurchased] = useState(false);
  const submitPurchase = () => {
    setPurchased(!purchased);
  };

  const NumeroOrdinale = () => {
    return <span>&#8470;</span>; // Numero ordinale Unicode
  };
  return (
    <>
      {!purchased && (
        <div className="summary">
          <ul className="book-list-summary">
            {savedBookingsSummary.map((booking, index) => (
              <li className="book-item-summary" key={index}>
                <strong>
                  Ticket <NumeroOrdinale /> {index + 1}{" "}
                </strong>

                <strong> adults : {booking.adults}</strong>

                <strong>children : {booking.child}</strong>

                <strong>destination : {booking.selectedOption}</strong>

                <strong>selected date : {booking.selectedDate}</strong>

                <strong>price: {booking.totalPrice} $</strong>
              </li>
            ))}
          </ul>
          <div className="resume-container">
            <div className="resume-message">
              <p>Each journey will depart from Cape Canaveral Space Station</p>
            </div>
            <br />
            <div>
              <div className="resume">
                <p>Total bookings: {savedBookingsSummary.length}</p>
                <p>Total Price:{calculateTotalPrice()} $</p>
              </div>
            </div>

            <div className="goBackHome">
              <button onClick={returnToHome}>go back home</button>
              <button onClick={submitPurchase}>submit purchase</button>
            </div>
          </div>
        </div>
      )}
      {purchased && (
        <div className="purchased">
          <div class="congratulations">
            <h2>Congratulations on your purchase!</h2>
            <br />
            <p>
              Embark on a journey of discovery and adventure beyond the stars.
              Explore the wonders of the cosmos and experience the thrill of
              space travel like never before.
            </p>
            <br />
            <button onClick={returnToHome}>back home</button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
