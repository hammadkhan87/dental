import React from 'react'
import "./style.scss"
import{TbUsersGroup} from "react-icons/tb"
import {TbHomePlus} from "react-icons/tb"
import{PiFiles} from "react-icons/pi"
const HomeCardsB = () => {
  return (
    <div className='home_cards_container'>
      <div className='main_card card_1'>
        <div className='inner_div_card1'>
            <span className='icon_b'><TbUsersGroup/></span>
      <p className='title_b'>OUR TEAM</p>
      <span className='des_b'>Meet our Young & Dynamic Team of Awesome Dentist.</span>
       </div></div>
      <div className='main_card card_2'>
      <div className='inner_div_card1'>
      <span className='icon_b' style={{backgroundColor:"#3b61b9"}}><TbHomePlus/></span>
      <p className='title_b'>OUR CLINIC TOUR</p>
      <span className='des_b'>A glance at Our Clinic Interior.</span>
       </div>
      </div>
      <div className='main_card card_2'>
      <div className='inner_div_card1'>
      <span className='icon_b'style={{backgroundColor:"#6ec1e4"}}><PiFiles/></span>
      <p className='title_b'>TESTIMONIALS</p>
      <span className='des_b'>What Our Client Speak About Us.</span>
       </div>
      </div>
     

    </div>
  )
}

export default HomeCardsB