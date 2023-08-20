import React from 'react'
import "./style.scss"
import Pagetitle from '../../components/pagetitle/Pagetitle'
import Location from '../../components/maplocation/Location'
import mainimg from "../../images/Clone-Stamp.jpg"
import ContactForm from '../../components/contactform/ContactForm'
const Contact = () => {
  return (
    <div className='contact_main_container'>
        <Pagetitle title="Contact Us"/>
        <Location/>
        <div className='contact_img'>
            <img src={mainimg} alt="" />
        </div>
        <ContactForm/>
    </div>
  )
}

export default Contact