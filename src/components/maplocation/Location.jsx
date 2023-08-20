import React from "react";
import "./style.scss";
import {ImLocation2} from "react-icons/im"
import{LuPhoneCall} from "react-icons/lu"
import{AiOutlineMail} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import{BsFillCalendar2RangeFill} from "react-icons/bs"
import{BiTimeFive} from "react-icons/bi"
import {BsYoutube} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
const Location = () => {
  return (
    <div className="location_main_div">
      <div className="left_map_location">
        <iframe
          key={7676}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.817018586297!2d80.2346314!3d13.0473164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650a386b595%3A0xc621c17556a4c0d4!2sBunny%20Teeth%20advanced%20dentistry%20%7C%20Best%20Children%20Dental%20Clinic%20%7C%20Sleep%20I%20Migraine%20l%20TMJ%20specialist%2C%20Chennai!5e0!3m2!1sen!2s!4v1692138983973!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="right_side_location">
        <p className="right_side_title1">OUR CLINIC</p>
        <p className="right_side_title2">la route</p>
        <p className="right_side_des">
          Locating us is easier as the map directs you
        </p>
        <p className="right_side_title3">Chennai</p>
        <a className="right_icon_text" href="https://goo.gl/maps/CYkXCMBxXkb6xGXh9" target="_blank">
          <span className="r_map_icon">
            <ImLocation2 />
          </span>
          <p className="r_map_text">
            72/60, Bazullah Rd, T.Nagar, TN - 600 017
          </p>
        </a>
        <a className="right_icon_text"
        href="https://wa.me/919840031819"
        target="_blank" 
        >
          <span className="r_map_icon">
            <LuPhoneCall />
          </span>
          <p className="r_map_text">
            +(91) 98400 31819
          </p>
        </a>
        <a className="right_icon_text"
        href="tel:+914442121819" target='_blank'
        >
          <span className="r_map_icon">
          <LuPhoneCall />
          </span>
          <p className="r_map_text">
          +(91) 4442121819
          </p>
        </a>
        <a className="right_icon_text"  href = "mailto: thebunnyteeth@gmail.com">
          <span className="r_map_icon">
            <AiOutlineMail />
          </span>
          <p className="r_map_text">
             thebunnyteeth@gmail.com
          </p>
        </a>
        <p className='right_side_title2' style={{marginTop:"10px",fontSize:"30px"}}>Clinic Hours</p>
        <hr  style={{marginTop:"10px"}}/>
        <div className="right_icon_text">
          <span className="r_map_icon">
            <BsFillCalendar2RangeFill />
          </span>
          <p className="r_map_text">
          Monday to Saturday
          </p>
        </div>
        <div className="right_icon_text">
          <span className="r_map_icon">
            <BiTimeFive />
          </span>
          <p className="r_map_text">
          10:00 AM to 8:00 PM
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default Location;
