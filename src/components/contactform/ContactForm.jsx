import React from "react";
import "./style.scss";
import { ImLocation2 } from "react-icons/im";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillCalendar2RangeFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
const ContactForm = () => {
  return (
    <div className="contact_main_p">
      <div className="contact_p_inner">
        <div className="contact_p_left_side">
          <p className="contact_p_left_title1">WE WILL CONTACT</p>
          <p className="contact_p_left_title2">Get a call back</p>
          <form action="" className="contact_form_left">
            <label className="field_text">First Name</label>
            <input type="text" className="input_field" />
            <label className="field_text">Last Name</label>
            <input type="text" className="input_field" />
            <label className="field_text">Contact Number</label>
            <input type="contact" className="input_field" />
            <label className="field_text">Email</label>
            <input type="email" className="input_field" />
            <label className="field_text">Subject</label>
            <input type="text" className="input_field" />
            <label className="field_text">Your Message</label>
            <textarea
              type="text"
              className="input_field"
              style={{ height: "25vh" }}
            />
          </form>
          <button className="contact_p_submit_btn">Submit</button>
        </div>
        <div className="contact_p_right_side">
          <p className="contact_p_right_title1">SOCIAL MEDIA</p>
          <p className="contact_p_right_title2">Connect With Us</p>
          <p className="contact_p_right_des">
            Strong connection is the key to global success. Travel through our
            social media channels to know more about our improvisations,
            treatments, milestones, contended staffs and satisfied clients
          </p>

          <div className="cntus_social_icons">
            <a
              className="cntus_fb_icon"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/santosh.kumari.7568/"
              target="_blank"
            >
              <BsFacebook />
            </a>
            <a
              className="cntus_fb_icon"
              style={{ backgroundColor: "black" }}
              href="https://www.instagram.com/dr_santoshrathod_dentist/?utm_medium=copy_link"
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a
              className="cntus_fb_icon"
              style={{ backgroundColor: "#cd201f" }}
              href="https://www.youtube.com/channel/UCBRE5bDuKzXacW1Xpk8hYxQ"
              target="_blank"
            >
              <BsYoutube />
            </a>
            <a
              className="cntus_fb_icon"
              style={{ backgroundColor: "#818a91" }}
              href="https://goo.gl/maps/nZV7f7zfeUGBuUnE8"
              target="_blank"
            >
              <BsGoogle />
            </a>
            <a
              className="cntus_fb_icon"
              style={{ backgroundColor: "#25d366" }}
              href="https://wa.me/919840031819"
              target="_blank"
            >
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
