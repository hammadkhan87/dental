import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
import{LiaToothSolid} from "react-icons/lia"
import{HiOutlineFaceSmile} from "react-icons/hi2"
import{FaHeadSideVirus} from "react-icons/fa6"
import {FaSyringe} from"react-icons/fa6"
import {ImHappy} from "react-icons/im"
import {GiNightSleep} from "react-icons/gi"
const DentalServices = () => {
  return (
    <div className='dentalservices_main_container_a'>

        <span className='dentals_title'>Dental Services</span>
        <div className='dentals_main_cards_div'>
            <Link className='dentals_card' to="/generaldentistry">
                <span className='dentals_card_icon'><LiaToothSolid/></span>
                <span className='dentals_card_title'>General dentistry</span>
                <span className='dentals_card_description'>Get your basics examined here</span>
            </Link>
            <Link className='dentals_card' to="/KidsDentistry">
                <span className='dentals_card_icon'><HiOutlineFaceSmile/></span>
                <span className='dentals_card_title'>kids dentistry</span>
                <span className='dentals_card_description'>Meet our child friendly doctors who shoo away their pain</span>
            </Link>
            <Link className='dentals_card' to="/DentalImplants">
                <span className='dentals_card_icon'><FaSyringe/></span>
                <span className='dentals_card_title'>dental implants</span>
                <span className='dentals_card_description'>Affordable Dental implants</span>
            </Link>
            <Link className='dentals_card' to="/SmileMakeOver">
                <span className='dentals_card_icon'><ImHappy/></span>
                <span className='dentals_card_title'>smile makeover</span>
                <span className='dentals_card_description'>Walk your way through cheerless smiles to confident smiles</span>
            </Link>
            <Link className='dentals_card' to="/SedationDentistry">
                <span className='dentals_card_icon'><GiNightSleep/></span>
                <span className='dentals_card_title'>sleep dentistry</span>
                <span className='dentals_card_description'>Feel “at home” on the dentist’s chair. Painless support extended during surgery</span>
            </Link>
            <Link className='dentals_card' to="/OrthodonticTreatment">
                <span className='dentals_card_icon'><FaHeadSideVirus/></span>
                <span className='dentals_card_title'>orofacial pian &tmj disorders </span>
                <span className='dentals_card_description'>Get relief from Orofacial pain & TMJ disorders</span>
            </Link>
        </div>
    </div>
  )
}

export default DentalServices