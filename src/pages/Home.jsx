import React from 'react'
import SlderImgs from '../Components/SliderImgs/SliderImg'
import CardFirst from '../Components/cardFirst/CardFirst'
import CardSec from '../Components/CardSec/CardSec'
import Subscribtion from '../Components/Subscribtion/Subscribtion'
import MobileIdCard from '../Components/MobileIdCard/MobileIdCard'
import AppsCard from '../Components/AppsCard/AppIcon'

export default function Home() {
  return (
    <>
        <SlderImgs/>
        <CardFirst/>
        <CardSec/>
        <Subscribtion/>
        <MobileIdCard/>
        <AppsCard/>
    </>
  )
}
