import React from 'react'
import drpic1 from "../../images/AJ2I4601.jpg"
import drpic2 from "../../images/AJ2I4586.jpg"
import endpic from "../../images/Dr.jpg"
import "../Dental Implants/style.scss"
import imageaa from "../../images/Crowns-Bridges-1024x768.jpeg";
import Pagetitle from '../../components/pagetitle/Pagetitle'
import InfoPage from '../../components/InfoAboutPage/InfoPage'
import EndWhyUs from '../../components/EndWhyUs/EndWhyUs'
const DentalBridgesCrowns = () => {
  return (
<div className="implant_main_container">
      <Pagetitle title="Dental Bridges / Crowns" />
      <div className="imp_container_a">
        <div className="imp_left_side_container">
          <p className="imp_title">Dental Bridges / Crowns</p>
          <div className="imp_img">
            <img src={imageaa} alt="" />
          </div>
          <p className="imp_detail_left_side">
          On completion of root canal, we recommend a single gap or crown to cover tooth surface with the help of custom-made dental bridge. They replicate the tooth crown quite effectively and remain fixed to its place. They can help masticate food properly and restore missing gaps in your mouth. Availing Dental Bridges or crowns help maintain your lip and face structure as well as prevent putting excessive pressure on other teeth.
          </p>
          <p className="imp_detail_left_side">
          We offer three varieties of dental bridges/crowns like:</p>
         

          <ul
            className="imp_detail_left_side"
            style={{ listStyleType: "disc" }}
          >
            <li>
            Metal-Ceramic Crowns: They are durable, fused with porcelain, thus enhancing their strength. It is custom-designed to match your teeth’s original colour.

            </li>
            <li>
            Metal Crowns: They are created from Gold or nickel-titanium materials, but not aesthetically pleasing. However, they do have tremendous strength.
            </li>
            <li>
            All Ceramic crowns / Metal-free crowns: They are created from zirconium. Even a single dental bridge or crown appears similar to a natural tooth. Unlike porcelain, it possesses tremendous strength. It can also be matched to your natural tooth’s chroma & hue.
            </li>
          </ul>
          <p className="imp_detail_left_side">
          A damaged dental bridge or broken dental crown is likely to pose a serious health issue. We can provide immediate oral treatment as deemed necessary to provide long-term relief. Whatever be the reason for your dental crown or bridge to get damaged, our dentists know how to fix them correctly and quickly. Some situations, where damage is excessive, you may require urgent treatment. In other cases, you will have time to schedule arrangements to rectify this issue.          </p>
          <p className="imp_detail_left_side">
          If unsure about your damaged dental crown or broken dental bridge is a dental emergency or not, call our dental office immediately to get proper remedies. We have emergency room to provide urgent care and have all the necessary resources, devices and expertise required to provide proper and thorough treatment, be it emergency or normal ones.

</p>
         
        </div>
        <div className="imp_right_side_container">
          <InfoPage title="Dental Bridges / Crowns" drname1="Dr. Afshan" drname2="Dr Sivaranjini" dr1pic={drpic1} dr2pic={drpic2} videoid=""/>
        </div>
      </div>
      <p className="final_heading">We Care for your teeth!</p>
      <button className="imp_final_btn">Get Appointment</button>
      <div className="imp_final_container">
        <div className="imp_final_left">
            <EndWhyUs/>
        </div>
        <div className="imp_final_right"><img src={endpic} alt=""  /></div>
      </div>
    </div>
  )
}

export default DentalBridgesCrowns