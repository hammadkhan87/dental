import React from "react";
import "./style.scss";
import {ImLocation2} from "react-icons/im"
import{LuPhoneCall} from "react-icons/lu"
import{AiOutlineMail} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
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
          width="600"
          height="600"
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
        <div className="right_icon_text">
          <span className="r_map_icon">
            <ImLocation2 />
          </span>
          <p className="r_map_text">
            72/60, Bazullah Rd, T.Nagar, TN - 600 017
          </p>
        </div>
        <div className="right_icon_text">
          <span className="r_map_icon">
            <LuPhoneCall />
          </span>
          <p className="r_map_text">
            +(91) 98400 31819
          </p>
        </div>
        <div className="right_icon_text">
          <span className="r_map_icon">
          <LuPhoneCall />
          </span>
          <p className="r_map_text">
          +(91) 4442121819
          </p>
        </div>
        <div className="right_icon_text">
          <span className="r_map_icon">
            <AiOutlineMail />
          </span>
          <p className="r_map_text">
             thebunnyteeth@gmail.com
          </p>
        </div>
        <div className='cntus_social_icons'>
        <span className='cntus_fb_icon' style={{backgroundColor:"#3b5998"}}><BsFacebook/></span>
        <span className='cntus_fb_icon' style={{backgroundColor:"black"}}><BsInstagram/></span>
        <span className='cntus_fb_icon' style={{backgroundColor:"#cd201f"}}><BsYoutube/></span>
        <span className='cntus_fb_icon' style={{backgroundColor:"#818a91"}}><BsGoogle/></span>
        <span className='cntus_fb_icon' style={{backgroundColor:"#25d366"}}><BsWhatsapp/></span>
      </div>
      </div>
    </div>
  );
};

export default Location;
