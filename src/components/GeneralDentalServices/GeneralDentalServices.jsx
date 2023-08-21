import React from 'react'
import "./style.scss"
import{LiaToothSolid} from "react-icons/lia"
import {GiTooth} from "react-icons/gi"
import{FaHeadSideVirus} from "react-icons/fa6"
import{PiToothFill} from "react-icons/pi"
import {FaSyringe} from"react-icons/fa6"
import{FaTooth} from "react-icons/fa"
import {GiToothbrush} from "react-icons/gi"
import { Link } from 'react-router-dom'

const GeneralDentalServices = () => {
  return (
    <div className='dentalservices_main_container'>

    <span className='dentals_title'>General Dental Services</span>
    <div className='dentals_main_cards_div'>
        <Link to="/DentalBridgesandCrowns" className='dentals_card'>
            <span className='dentals_card_icon'><LiaToothSolid/></span>
            <span className='dentals_card_title'>BRIDGES & CROWN</span>
        </Link>
        <Link  to="/Dentures" className='dentals_card'>
            <span className='dentals_card_icon'><PiToothFill/></span>
            <span className='dentals_card_title'>DENTURES</span>
        </Link>
        <Link to="/OrthodonticTreatment" className='dentals_card'>
            <span className='dentals_card_icon'><FaSyringe/></span>
            <span className='dentals_card_title'>ORTHODONTIC TREATMENT</span>
        </Link>
        <Link to="/RootCanal"className='dentals_card'>
            <span className='dentals_card_icon'><GiTooth/></span>
            <span className='dentals_card_title'>ROOT CANAL</span>
        </Link>
        <Link to="/WisdomToothRemoval" className='dentals_card'>
            <span className='dentals_card_icon'><FaTooth/></span>
            <span className='dentals_card_title'>WISDOM TEETH REMOVEL</span>
        </Link>
        <Link className='dentals_card'>
            <span className='dentals_card_icon'><GiToothbrush/></span>
            <span className='dentals_card_title'>TEETH WHITENING</span>
        </Link>
    </div>
</div>
  )
}

export default GeneralDentalServices