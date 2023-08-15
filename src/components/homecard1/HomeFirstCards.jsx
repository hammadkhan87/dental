import React from 'react'
import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'\
import { faTooth} from '@fortawesome/free-solid-svg-icons'
import {TfiHeadphoneAlt} from "react-icons/tfi"



const HomeFirstCards = () => {
  return (
    <div className='home_cards_container'>
      <div className='main_card card_1'>
        <div className='inner_div_card1'><FontAwesomeIcon icon={faTooth}  style={{fontSize:"5rem",color:"#ac4186"}} />
      <p>20+</p>
      <span>Beaming Years</span>
       </div></div>
      <div className='main_card card_2'>
      <div className='inner_div_card1'><FontAwesomeIcon icon={faTooth}  style={{fontSize:"5rem",color:"#ac4186"}} />
      <p>10000+</p>
      <span>Confident Smiles</span>
</div>
      </div>
      <div className='main_card card_3'>
      <div className='inner_div_card3'><div className='icon_div'><TfiHeadphoneAlt/></div>
      <p>+(91) 9840031819</p>
      <span>Book an Appointment</span>
      </div>
      </div>

    </div>
  )
}

export default HomeFirstCards