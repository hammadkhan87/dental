import React from 'react'
import "./style.scss"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
const ContactWithus = () => {
  return (
    <div className='cntus_main_conatiner'>
        <div className='cntus_inner_container'>
        <p className="sp_title_1">SOCIAL MEDIA</p>
      <p className="sp_title_2">Connect With Us</p>
      <p className="sp_des_1">
      Strong connection is the key to global success. Travel through our social media channels to 
      know more about our improvisations, treatments, milestones, contended staffs and satisfied clients
      </p>
      <div className='cntus_social_icons'>
        <span className='cntus_fb_icon' style={{backgroundColor:"#3b5998"}}><BsFacebook/></span>
        <span className='cntus_fb_icon' style={{backgroundColor:"black"}}><BsInstagram/></span>
        <span className='cntus_fb_icon' style={{backgroundColor:"#cd201f"}}><BsYoutube/></span>
        <span className='cntus_fb_icon' style={{backgroundColor:"#818a91"}}><BsGoogle/></span>
        <span className='cntus_fb_icon' style={{backgroundColor:"#25d366"}}><BsWhatsapp/></span>
      </div>
        </div>
        </div>
  )
}

export default ContactWithus