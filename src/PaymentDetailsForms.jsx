import React, { useState, useEffect } from "react";

const PaymentDetailsForm = ({ onCompletePurchase }) => {
    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        expiringDate: "",
        cvc: "",
      });
      const [isFormValid, setIsFormValid] = useState(false);
    
      useEffect(() => {
        // Verifica se tutti i campi del modulo sono stati compilati
        const isValid =
          formData.name.trim() !== "" &&
          formData.cardNumber.trim() !== "" &&
          formData.expiringDate.trim() !== "" &&
          formData.cvc.trim() !== "";
        setIsFormValid(isValid);
      }, [formData]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      return (
        <div>
          <h2 className="form-title">Payment Details</h2>
          <form action="" className="checkout-form">
            <div className="input-line">
              <label htmlFor="name">Name on card</label>
              <br />
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Your name and surname"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="cardNumber">Card number</label>
              <br />
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                placeholder="1111-2222-3333-4444"
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <div className="input-line">
                <label htmlFor="expiringDate">Expiring Date</label>
                <br />
                <input
                  type="text"
                  name="expiringDate"
                  id="expiringDate"
                  placeholder="09-21"
                  value={formData.expiringDate}
                  onChange={handleChange}
                />
              </div>
              <div className="input-line">
                <label htmlFor="cvc">CVC</label>
                <br />
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  placeholder="***"
                  value={formData.cvc}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button
              type="button"
              value="confirm card"
              onClick={onCompletePurchase}
              className="purchase-btn"
              disabled={!isFormValid}
            >
              Confirm card
            </button>
          </form>
        </div>
      );
    };
    
    export default PaymentDetailsForm;