import React from "react";

import Header from "../Components/Header/Header";
import SlderImgs from "../Components/SliderImgs/SliderImg";
import CardFirst from "../Components/cardFirst/CardFirst";
import CardSec from "../Components/CardSec/CardSec";
import Subscribtion from "../Components/Subscribtion/Subscribtion";
import MobileIdCard from "../Components/MobileIdCard/MobileIdCard";
import AppsCard from "../Components/AppsCard/AppIcon";
import Catalog from "../Components/Catalog/Catalog";
import News from "../Components/SliderImgs/News/News";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SlderImgs />
      <CardFirst />
      <CardSec />
      <Subscribtion />
      <MobileIdCard />
      <AppsCard />
      <Catalog />
      <News />
      <Footer />
    </>
  );
}
