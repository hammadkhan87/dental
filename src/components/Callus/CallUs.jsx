import React from 'react'
import "./style.scss"
import {CiVideoOn} from "react-icons/ci"
import {FiPhoneCall} from "react-icons/fi"

const CallUs = () => {
  return (
    <div className='call_us_main_container'>
        <div className='call_us_card'>
            <a href="https://wa.me/919840031819">
            <span className='vide_call_icon'><CiVideoOn/></span>
             <p className='call_us_title'>FOR VIDEO CONSULTATION</p>
             <p className='call_us_sub_text'>Contect with Us</p>
             <p className='call_us_sub_text'>+(91)9840031819</p>
             </a>
        </div>
        <div className='call_us_card'>
            <a href="tel:+914442121819">
            <span className='vide_call_icon'><FiPhoneCall/></span>
             <p className='call_us_title'>FOR APPOINTMENT</p>
             <p className='call_us_sub_text'>Call Us</p>
             <p className='call_us_sub_text'>+(91)44 42121819</p>
             <p className='call_us_sub_text'>+(91)9840031819</p>
             </a>
        </div>
    </div>
  )
}

export default CallUs