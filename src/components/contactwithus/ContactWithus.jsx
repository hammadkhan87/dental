import React from "react";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
const ContactWithus = () => {
  return (
    <div className="cntus_main_conatiner">
      <div className="cntus_inner_container">
        <p className="sp_title_1">SOCIAL MEDIA</p>
        <p className="sp_title_2">Connect With Us</p>
        <p className="sp_des_1">
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
            href="https://www.instagram.com/dr_santoshrathod_dentist/"
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
  );
};

export default ContactWithus;
