import React from 'react'
import "./style.scss"
import{LiaToothSolid} from "react-icons/lia"
import {GiTooth} from "react-icons/gi"
import{FaHeadSideVirus} from "react-icons/fa6"
import{PiToothFill} from "react-icons/pi"
import {FaSyringe} from"react-icons/fa6"
import{FaTooth} from "react-icons/fa"
import {GiToothbrush} from "react-icons/gi"
const GeneralDentalServices = () => {
  return (
    <div className='dentalservices_main_container'>

    <span className='dentals_title'>General Dental Services</span>
    <div className='dentals_main_cards_div'>
        <div className='dentals_card'>
            <span className='dentals_card_icon'><LiaToothSolid/></span>
            <span className='dentals_card_title'>BRIDGES & CROWN</span>
        </div>
        <div className='dentals_card'>
            <span className='dentals_card_icon'><PiToothFill/></span>
            <span className='dentals_card_title'>DENTURES</span>
        </div>
        <div className='dentals_card'>
            <span className='dentals_card_icon'><FaSyringe/></span>
            <span className='dentals_card_title'>ORTHODONTIC TREATMENT</span>
        </div>
        <div className='dentals_card'>
            <span className='dentals_card_icon'><GiTooth/></span>
            <span className='dentals_card_title'>ROOT CANAL</span>
        </div>
        <div className='dentals_card'>
            <span className='dentals_card_icon'><FaTooth/></span>
            <span className='dentals_card_title'>WISDOM TEETH REMOVEL</span>
        </div>
        <div className='dentals_card'>
            <span className='dentals_card_icon'><GiToothbrush/></span>
            <span className='dentals_card_title'>TEETH WHITENING</span>
        </div>
    </div>
</div>
  )
}

export default GeneralDentalServices