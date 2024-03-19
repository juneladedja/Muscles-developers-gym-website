import React, { useState } from "react";
import "./Book.css";

function Book() {
    const [showBook, setShowBook] = useState(false)
    const [readyBook, setReadyBook] = useState(false)

    const book_back = () => {
        setShowBook(false)
        setReadyBook(false)
    }
  return (
    <div className={`${"book"} ${showBook ? "expanded_book" : ""} ${readyBook ? "ready_book" : false}`} >
      <div className="user_profile">
        <p>My trips </p>
        <button onClick={book_back} > Back</button>
      </div>
      <div className="trips-list">
        <p>jhgkhg</p>
      </div>
      <div className="check">
        <p className="check-btn">Check Out</p>
      </div>
    </div>
  );
}

export default Book;
