import React from "react";
import Header from "../Components/Header/Header";
import ForHomeCards from '../Components/ForHomeCards/ForHomeCards'
import InternetInfo from '../Components/InternetInfo/InternetInfo'
import Footer from "../Components/Footer/Footer";

export default function ForHome() {
  return (
    <div className=" ">
      <Header />
      <ForHomeCards />
      <InternetInfo/>
      <Footer/>
    </div>
  );
}
