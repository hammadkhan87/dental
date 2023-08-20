import React from 'react'
import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'\
import { faTooth} from '@fortawesome/free-solid-svg-icons'
import {TfiHeadphoneAlt} from "react-icons/tfi"



const HomeFirstCards = () => {
  return (
    <div className='home_cards_container_c'>
      <div className='main_card_a card_1'>
        <div className='inner_div_card1'><FontAwesomeIcon icon={faTooth} className='icon_abc'  />
      <p>20+</p>
      <span>Beaming Years</span>
       </div></div>
      <div className='main_card_a card_1'>
         <div className='inner_div_card1'><FontAwesomeIcon icon={faTooth} className='icon_abc'  />
          <p>10000+</p>
          <span>Confident Smiles</span>
       </div>
      </div>
      <a href="https://wa.me/919840031819" className='main_card_a card_3_a' target="_blank">
          <div className='inner_div_card3_a'><div className='icon_div'><TfiHeadphoneAlt/></div>
        <p>+(91) 9840031819</p>
          <span>Book an Appointment</span>
      </div>
      </a>

    </div>
  )
}

export default HomeFirstCards