import React from 'react'
import Header from '../Components/Header/Header'
import RoumingFirst from '../Components/RoumingFirst/RoumingFirst'
import UcomRouming from '../Components/UcomRouming/UcomRouming'
import RoamingPage from '../Components/RoumingPage/RoamingPage'
import Footer from "../Components/Footer/Footer"

export default function Rouming() {
  return (
    <div>
        <Header/>
        <RoumingFirst/>
        <UcomRouming/>
        <RoamingPage/>
        <Footer/>
    </div>
  )
}

