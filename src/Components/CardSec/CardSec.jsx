import React from "react";
import Card from "./Card";

export default function CardSec() {
  const db = [
    {
      name: "Level Up+ 3000",
      internet: "30 ԳԲ ինտերնետ",
      rope: "1500 րոպե",
      sms: "300 SMS",
      tv: "35 հեռուստաալիք",
      gin: "3 000 ֏",
    },
    {
      name: "Level Up+ 4000",
      internet: "Անսահմանափակ ինտերնետ",
      rope: "700 րոպե",
      sms: "500 SMS",
      tv: "35 հեռուստաալիք",
      gin: "4 000 ֏",
    },
    {
      name: "Level Up+ 5000",
      internet: "Անսահմանափակ ինտերնետ",
      rope: "3000 րոպե",
      rouming: "200 ՄԲ ռոումինգում",
      sms: "1000 SMS",
      tv: "35 հեռուստաալիք",
      gin: "5 000 ֏",
    },
    {
      name: "Unity 12500",
      internet: "Super Wi-Fi սարք",
      taninternet: "400 Մբ/վ տան ինտերնետ",
      tv: "200 հեռուստաալիք",
      TVbox: "Անվճար Premium WiFi Plus սարք, Smart TV box",
      internet: "Անսահմանափակ ինտերնետ",
      gin: "5 000 ֏",
      rope: "3000 րոպե",
    },
  ];

  return (
    <>
      <h1 style={{
        marginTop:"50px"
      }}>Լավագույն առաջարկ</h1>
      <div className="yndhannurDiv">
        {db.map((el, i) => {
          return (
            <Card
              key={i}
              name={el.name}
              internet={el.internet}
              rope={el.rope}
              TVbox={el.TVbox}
              tv={el.tv}
              rouming={el.rouming}
              gin={el.gin}
              taninternet={el.taninternet}
              sms={el.sms}
            />
          );
        })}
      </div>
    </>
  );
}
