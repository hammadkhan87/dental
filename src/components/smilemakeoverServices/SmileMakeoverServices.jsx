import React from 'react'
import{LiaToothSolid} from "react-icons/lia"
import {GiTooth} from "react-icons/gi"
import{PiToothFill} from "react-icons/pi"
import {FaSyringe} from"react-icons/fa6"
import{FaTooth} from "react-icons/fa"
import {GiToothbrush} from "react-icons/gi"
const SmileMakeoverServices = () => {
  return (
<div className='dentalservices_main_container'>

<span className='dentals_title'>Smile Makeover services</span>
<div className='dentals_main_cards_div'>
    <div className='dentals_card'>
        <span className='dentals_card_icon'><LiaToothSolid/></span>
        <span className='dentals_card_title'>COSMETIC DENTISTRY</span>
    </div>
   
    <div className='dentals_card'>
        <span className='dentals_card_icon'><FaTooth/></span>
        <span className='dentals_card_title'>Clear Aligners / Invisible Braces</span>
    </div>
    <div className='dentals_card'>
        <span className='dentals_card_icon'><GiToothbrush/></span>
        <span className='dentals_card_title'>TEETH WHITENING</span>
    </div>
</div>
</div>  )
}

export default SmileMakeoverServices