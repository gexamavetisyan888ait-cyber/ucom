import React from "react";
import "./CardSec.css";

export default function Card({
  name,
  internet,
  rope,
  sms,
  TVbox,
  tv,
  gin,
  rouming,
  taninternet,
}) {
  return (
    <div className="cardSecCard">
      <div className="nameCard">{name}</div>
      <div className="cardInfo">
        {internet ? (
          <p>
            <i class="fa-solid fa-globe"></i> {internet}
          </p>
        ) : (
          ""
        )}
        {rope ? (
          <p>
            <i class="fa-solid fa-phone-volume"></i> {rope}
          </p>
        ) : (
          ""
        )}
        {sms ? (
          <p>
            <i class="fa-regular fa-comment-dots"></i> {sms}
          </p>
        ) : (
          ""
        )}
        {TVbox ? (
          <p>
            <i class="fa-solid fa-tag"></i> {TVbox}
          </p>
        ) : (
          ""
        )}
        {tv ? (
          <p>
            <i class="fa-solid fa-tv"></i> {tv}
          </p>
        ) : (
          ""
        )}
        {rouming ? (
          <p>
            <i class="fa-solid fa-signal"></i>
            {rouming}
          </p>
        ) : (
          ""
        )}
        {taninternet ? (
          <p>
            <i class="fa-solid fa-house"></i>
            {taninternet}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="endCard">
        <p>{gin} Ավելին</p>
        <button>Միանալ</button>
      </div>
    </div>
  );
}
