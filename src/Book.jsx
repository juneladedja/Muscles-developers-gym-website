import React, { useState } from "react";
import "./Book.css";

function Book() {
  const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  //     .get("/api/bookings")
  //     .then((response) => {
  //       setBookings(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Errore nel recupero delle prenotazioni:", error);
  //     });
  // }, []); // Esegui solo al caricamento del componente
  return (
    <>
      <div className="book-container">
        <div className="book">
          <h2>My Books</h2>
          <ul>
            {bookings.map((booking) => (
              <li key={booking.id}>
                <strong>{booking.planet}</strong> - {booking.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Book;
