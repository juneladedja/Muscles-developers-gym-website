import React, { useState } from 'react';
import './CheckoutStyle.css';
import Profile from "./Profile.svg";
import Checkoutimg from "./Checkout.png";

export function Checkout() {
    const [showBillingAddress, setShowBillingAddress] = useState(false);
    const [billingData, setBillingData] = useState({});
    const [showSummary, setShowSummary] = useState(false);
    const [progressStep, setProgressStep] = useState(1); 

    const handleCompletePurchase = () => {
        setShowBillingAddress(true);
        setProgressStep(2); 
    };

    const handleConfirmBillingAddress = () => {
        setShowBillingAddress(false);
        setShowSummary(true);
        setProgressStep(3);
        console.log("Billing Data:", JSON.stringify(billingData));
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        const updatedBillingData = { ...billingData, [name]: value };
        setBillingData(updatedBillingData);
    };
    
    return (
        <>
            <div className='checkoutContainer'>
                <div className='headerContainer'>
                    <h1 className="logo">NEBULA</h1>
                    <div className="menu-icons-container">
                        <h3 style={{color:"white"}}>HOME</h3>
                    </div>
                </div>

                <div className="progress-checkout-container">
                    <div className={`progress-step-container ${progressStep >= 1 ? 'completed' : ''}`}>
                        <div className={`step-check ${progressStep >= 1 ? 'completed' : ''}`}></div>
                        <span className="step-title">Shipping</span>
                    </div>
                    <div className={`progress-step-container ${progressStep >= 2 ? 'completed' : ''}`}>
                        <div className={`step-check ${progressStep >= 2 ? 'completed' : ''}`}></div>
                        <span className="step-title">Payment</span>
                    </div>
                    <div className={`progress-step-container ${progressStep >= 3 ? 'completed' : ''}`}>
                        <div className={`step-check ${progressStep >= 3 ? 'completed' : ''}`}></div>
                        <span className="step-title">Review</span>
                    </div>
                </div>

                <div className="form-container">
                    {showBillingAddress && !showSummary && (
                        <>
                            <h2 style={{marginBottom:"5.5rem"}} className="form-title">Billing Address</h2>
                            <form style={{ height: '50%' }} action="" className="checkout-form">
                                <div className="input-line">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" id="country" placeholder="Your country" value={billingData.country || ''} onChange={handleFormChange} />
                                </div>
                                <div className="input-line">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" id="city" placeholder="Your city" value={billingData.city || ''} onChange={handleFormChange} />
                                </div>
                                <div className="input-line">
                                    <label htmlFor="street">Street</label>
                                    <input type="text" name="street" id="street" placeholder="Your street" value={billingData.street || ''} onChange={handleFormChange} />
                                </div>
                                <div className="input-line">
                                    <label htmlFor="zipcode">Zip Code</label>
                                    <input type="text" name="zipcode" id="zipcode" placeholder="Your zip code" value={billingData.zipcode || ''} onChange={handleFormChange} />
                                </div>
                                <input className='buttonBilling' type="button" value="Confirm Billing Address" onClick={handleConfirmBillingAddress} />
                            </form>
                        </>
                    )}

                    {showSummary && (
                        <div className="summary-container">
                            <h2 className='trip_booked_h2'>Your trip has been booked! Get your bags ready!</h2>
                            <h2>Summary:</h2>
                            <h3>Country: {billingData.country}</h3>
                            <h3>City: {billingData.city}</h3>
                            <h3>Street: {billingData.street}</h3>
                            <h3>Zip Code: {billingData.zipcode}</h3>
                            <h3>Your Ticket has been sent to your mail</h3>
                        </div>
                    )}

                    {!showBillingAddress && !showSummary && (
                        <>
                            <h2 className="form-title">Payment Details</h2>
                            <form action="" className="checkout-form">
                                <div className="input-line">
                                    <label htmlFor="name">Name on card</label>
                                    <input type="text" name="name" id="name" placeholder="Your name and surname" />
                                </div>
                                <div className="input-line">
                                    <label htmlFor="cardNumber">Card number</label>
                                    <input type="text" name="cardNumber" id="cardNumber" placeholder="1111-2222-3333-4444" />
                                </div>
                                <div className="input-container">
                                    <div className="input-line">
                                        <label htmlFor="expiringDate">Expiring Date</label>
                                        <input type="text" name="expiringDate" id="expiringDate" placeholder="09-21" />
                                    </div>
                                    <div className="input-line">
                                        <label htmlFor="cvc">CVC</label>
                                        <input type="text" name="cvc" id="cvc" placeholder="***" />
                                    </div>
                                </div>
                                <input type="button" value="Complete purchase" onClick={handleCompletePurchase} />
                            </form>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
