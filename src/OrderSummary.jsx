import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ billingData }) => {
  const returnAtHome = useNavigate()

function returnToHome(){
  returnAtHome("../homepage")
}
  return (
    <>
        <div className="summary-container">
      <h2 className="trip_booked_h2">Your trip has been booked!</h2>
      <h2>Summary:</h2>
      <h3>Country: {billingData.country}</h3>
      <h3>City: {billingData.city}</h3>
      <h3>Street: {billingData.street}</h3>
      <h3>Zip Code: {billingData.zipcode}</h3>
      <h3>Your Ticket has been sent to your mail</h3>
    </div>
    <div className="goBackHome">
      <button onClick={returnToHome}>go back home</button>
    </div>

    </>
  );
};

export default OrderSummary;
