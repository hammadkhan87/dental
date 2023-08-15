import React from 'react'
import "./style.scss"
import AimCard from './Aimcard/AimCard'
import {GiCircleSparks} from "react-icons/gi"
import {LiaToothSolid} from "react-icons/lia"
import {GiAchievement} from "react-icons/gi"
const Aimcards = () => {
  return (
    <div className='aim_cards_main_container'>
        <AimCard 
        logo={<GiCircleSparks/>} 
        title={"VISION"} 
        des={"Our Vision is to offer our patients with an amazing dental experience. We also strive to promote lifelong relationship that is built on exceptional patient care, work quality, confidence and trust."}/>
        <AimCard 
        logo={<LiaToothSolid/>} 
        title={"MISSION"} 
        des={"Our Mission is to exceed our clients’ expectations by offering prompt and top quality dental care. We are quite passionate and work hard to instil confidence in our patients ensuring they derive the very best dentistry care we can offer."}/>
        <AimCard 
        logo={<GiAchievement/>} 
        title={"MOTTO"} 
        des={"Our Motto is to provide our clients with a caring, positive experience."}/>
    </div>
  )
}

export default Aimcards