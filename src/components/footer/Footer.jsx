import React from 'react'
import "./style.scss"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import{ImLocation2} from "react-icons/im"
import {BiSolidPhoneCall} from "react-icons/bi"
import {MdEmail} from "react-icons/md"
import logo from "../../images/Asset-3300-1.png"
const Footer = () => {
  return (
     <div>
    <div className='footer_main_container'>
        <p className='footer_title_1'>Get in Touch With Us.</p>
        <div className='cntus_social_icons'>
        <a className='cntus_fb_icon' style={{backgroundColor:"#3b5998"}} href='https://www.facebook.com/santosh.kumari.7568/' target='_blank'><BsFacebook/></a>
        <a className='cntus_fb_icon' style={{backgroundColor:"black"}} href='https://www.instagram.com/dr_santoshrathod_dentist/?utm_medium=copy_link' target='_blank'><BsInstagram/></a>
        <a className='cntus_fb_icon' style={{backgroundColor:"#cd201f"}}   href="https://www.youtube.com/channel/UCBRE5bDuKzXacW1Xpk8hYxQ"
            target="_blank"><BsYoutube/></a>
        <a className='cntus_fb_icon' style={{backgroundColor:"#818a91"}}  href="https://goo.gl/maps/nZV7f7zfeUGBuUnE8"
            target="_blank"><BsGoogle/></a>
        <a className='cntus_fb_icon'  style={{ backgroundColor: "#25d366" }}
            href="https://wa.me/919840031819"
            target="_blank" ><BsWhatsapp/></a>
      </div>
    <div className='footer_contact_cards'>
        <a className='footer_contact_card_1' href='https://goo.gl/maps/sWuEr5doXbFNc1Lw5' target='_blank'>
            <span className='footer_card_icon_1' >
                <ImLocation2/>
            </span>

            <div className='footer_text_div'>
            <p className='footer_card_title'>Our Clinic</p>
            <p className='footer_sub_text'># 72/60, Bazullah Road, T.Nagar, Chennai - 600017</p>
            </div>
        </a>
        <a className='footer_contact_card_1'  href="tel:+914442121819" target='_blank'>
            <span className='footer_card_icon_1'>
                <BiSolidPhoneCall/>
            </span>

            <div className='footer_text_div'>
            <p className='footer_card_title'>Call Us</p>
            <p className='footer_sub_text'> +(91) 44-42121819 <br />+(91) 98400 31819</p>
            </div>
        </a>
        <a className='footer_contact_card_1' href = "mailto: thebunnyteeth@gmail.com">
            <span className='footer_card_icon_1'>
                <MdEmail/>
            </span>

            <div className='footer_text_div'>
            <p className='footer_card_title'>Email Us</p>
            <p className='footer_sub_text'>thebunnyteeth@gmail.com</p>
            </div>
        </a>
      </div>
      </div>
      <div className='footer_end_logo'><img src={logo} alt='logo' style={{width:"150px"}} className='footer_logo'></img><p>
        
      © 2023 Bunny Teeth. All rights reserved. 

</p></div>
    </div>
  )
}

export default Footer