import React from 'react'
import drpic1 from "../../images/J2I1580_Square.jpg"
import drpic2 from "../../images/Dr.jpg"
import endpic from "../../images/AJ2I4586.jpg"
import "../Dental Implants/style.scss"
import imageaa from "../../images/Aligners.jpg";
import Pagetitle from '../../components/pagetitle/Pagetitle'
import InfoPage from '../../components/InfoAboutPage/InfoPage'
import EndWhyUs from '../../components/EndWhyUs/EndWhyUs'
import { Link } from 'react-router-dom'
export const ClearAligners = () => {
  return (
    <div className="implant_main_container">
    <Pagetitle title="Clear Aligners / Invisible Braces" />
    <div className="imp_container_a">
      <div className="imp_left_side_container">
        <p className="imp_title">Clear Aligners / Invisible Braces</p>
        <div className="imp_img">
          <img src={imageaa} alt="" />
        </div>
        <p className="imp_detail_left_side">
        We provide clear aligners or invisible braces depending on our patient’s teeth condition. Being similar to braces, they are used for teeth straightening purpose. Constant, gentle force is used to move teeth to its desired position, but without the use of metal brackets and wires.
        </p>
        <p className="imp_detail_left_side">
        This dental device does offer lots of advantages like it is removable, invisible, fits perfectly your teeth, takes less time when compared to traditional braces and easy to ensure routine oral care. We offer customized aligners/invisible braces to our patients via digital scan. Our qualified Orthodontist will suggest certain guidelines that are to be followed stringently to make the most from these devices.  We recommend wearing the aligners for about 22-23hours every day to derive the best results. You can remove them effortlessly to brush, drink, eat and clean your teeth. This treatment is suggested to those who have all their adult teeth. It should be removed if consuming anything hot. They should be brushed and cleaned regularly. We provide you with a box where you should keep it after cleaning if not required to ensure it does not get dirty.        </p>
        <p className="imp_detail_left_side">
        They offer amazing, quick and hassle-free results while being more comfortable when compared to traditional teeth braces. To ensure success, you need to adhere to our expert suggestions strictly.        </p>

        
        <p className="imp_detail_left_side">
        Aligners are considered to be hassle-free procedure and offer much faster results when compared to traditional braces. Recovery time takes around 13 to 15 months. With proper aftercare, you can enjoy deriving permanent results.        </p>
        <p className="imp_detail_left_side">
        No side-effects are noticed on this procedure and it is termed to be among the safest orthodontics treatments offered across the globe. We will first evaluate your smile’s current state and accordingly suggest you aligners. You will take about 2 to 3 weeks to get accustomed to using it.        </p>
        
      </div>
      <div className="imp_right_side_container">
        <InfoPage title="CLEAR ALIGNERS / INVISIBLE BRACES" drname1="Dr. Santosh" drname2="Dr. Vishnu Priya" dr1pic={drpic1} dr2pic={drpic2} videoid="IrA2jZs-OfI"/>
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
  </div>  )
}
