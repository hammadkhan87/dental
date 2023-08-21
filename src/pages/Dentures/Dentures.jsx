import React from 'react'
import drpic1 from "../../images/AJ2I4601.jpg"
import drpic2 from "../../images/AJ2I4586.jpg"
import endpic from "../../images/reception.png"
import "../Dental Implants/style.scss"
import imageaa from "../../images/Dentures-1024x683.jpg";
import Pagetitle from '../../components/pagetitle/Pagetitle'
import InfoPage from '../../components/InfoAboutPage/InfoPage'
import EndWhyUs from '../../components/EndWhyUs/EndWhyUs'
import { Link } from 'react-router-dom'
const Dentures = () => {
  return (
    <div className="implant_main_container">
      <Pagetitle title="Dentures" />
      <div className="imp_container_a">
        <div className="imp_left_side_container">
          <p className="imp_title">Dentures</p>
          <div className="imp_img">
            <img src={imageaa} alt="" />
          </div>
          <p className="imp_detail_left_side">
          You may experience various types of problems with your teeth including missing teeth. We can help 
          you overcome such dental issues and provide with the most appropriate treatment. We can help you smile, be confident when meeting other people, 
          speak properly without any problem and eat even hard to chew foods.
          </p>
          <p className="imp_detail_left_side">
          We offer custom-made dentures to restore your missing teeth, lost oral functions and overall face appearance.
          </p>
          <p className="imp_detail_left_side">
          Based on your specific case, we offer our patients with different types of denture procedures like:
          </p>

          <ul
            className="imp_detail_left_side"
            style={{ listStyleType: "disc" }}
          >
            <li>
            Full Dentures: Also referred to as complete dentures are performed to replace your entire natural teeth.

            </li>
            <li>
            Partial Dentures: This procedure is recommended if your surrounding natural teeth are weak enough to support the structures. For example, one or more teeth are missing and dental bridges.
            </li>
            <li>
            Complete dentures: They come with coloured plastic base. It replicates gum tissue as well as supports full set porcelain or plastic teeth.

            </li>
            <li>
            Immediate dentures: Immediate dentures can be refitted easily when compared to permanent dentures. It accommodates changes taking place in your mouth due to swelling of the gums and get back to its original place after healing.
            </li>
            <li>
            Overdentures: This alternative procedure is recommended if traditional dentures do not suit you. It is also suggested if you are left with few natural teeth.
            </li>
            <li>
            Implanted-supported dentures: Dental implants anchor these dentures and are considered to be a permanent fixture. It can easily replace any teeth number. They can also be attached in different ways. However, it should be treated and taken care of similar to traditional dentures.

            </li>
          </ul>
          <p className="imp_detail_left_side">
          We provide top-quality dentures to ensure your multiple missing teeth are taken care of. Dentures help improve your face structure and smile. You can also effortlessly chew food and be properly nourished. They also replace teeth causing oral health issues and extreme pain.
          </p>
          
        </div>
        <div className="imp_right_side_container">
          <InfoPage title="Dentures" drname1="Dr. Afshan Hassan.K" drname2="Dr Sivaranjini" dr1pic={drpic1} dr2pic={drpic2} videoid="IrA2jZs-OfI"/>
        </div>
      </div>
      <p className="final_heading">We Care for your teeth!</p>
      <Link to="/bookanappointment" className="imp_final_btn">Get Appointment</Link>
      <div className="imp_final_container">
        <div className="imp_final_left">
            <EndWhyUs/>
        </div>
        <div className="imp_final_right"><img src={endpic} alt=""  /></div>
      </div>
    </div>
  )
}

export default Dentures