import React from "react";
import "./AppIcon.css";

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <h2>Recharge your account online</h2>
        <p className="subtitle">
          Enter your Ucom mobile or fixed service number.
        </p>

        <div className="tabs">
          <span className="tab active">Phone number</span>
          <span className="tab">ID</span>
        </div>

        <div className="input-row">
          <div className="phone-input">
            <span className="prefix">+374</span>
            <input type="text" placeholder="XX XXX XXX" />
          </div>

          <button className="pay-btn">💳 Pay</button>
        </div>

        <div className="payment">
          <span>VISA</span>
          <span>Mastercard</span>
        </div>
      </div>

      <div className="card">
        <h2>Ucom apps</h2>
        <p className="subtitle">
          Discover a new level of comfort through our innovative mobile
          applications.
        </p>

        <div className="apps-grid">
          {["Ucom", "Uplay", "UPay", "uKid"].map((app) => (
            <div className="app-item" key={app}>
              <div className="app-icon">{app[0]}</div>
              <span>{app}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
