import React from 'react'
import Pagetitle from '../../components/pagetitle/Pagetitle'
import OneStopSolution from '../../components/onestopsolution/OneStopSolution'
import imageb from "../../images/1.jpg"
import SmileMakeoverServices from '../../components/smilemakeoverServices/SmileMakeoverServices'
import WhyTrust from '../../components/WHY TRUST/WhyTrust'

const SmileMakeOver = () => {
  return (
    <div>
        <Pagetitle title={'SMILE MAKEOVER'}/>
        <OneStopSolution title="Now Smile like Never Before" image={imageb}/>
        <SmileMakeoverServices/>
        <WhyTrust/>
    </div>
  )
}

export default SmileMakeOver