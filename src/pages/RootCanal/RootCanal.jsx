import React from 'react'
import drpic1 from "../../images/J2I1580_Square.jpg"
import drpic2 from "../../images/Dr.jpg"
import endpic from "../../images/AJ2I4524.jpg"
import "../Dental Implants/style.scss"
import imageaa from "../../images/Root-canal-Treatment_1-1024x919.jpg";
import Pagetitle from '../../components/pagetitle/Pagetitle'
import InfoPage from '../../components/InfoAboutPage/InfoPage'
import EndWhyUs from '../../components/EndWhyUs/EndWhyUs'
import { Link } from 'react-router-dom'

const RootCanal = () => {
  return (
    <div className="implant_main_container">
    <Pagetitle title="Root Canal" />
    <div className="imp_container_a">
      <div className="imp_left_side_container">
        <p className="imp_title">Root Canal</p>
        <div className="imp_img">
          <img src={imageaa} alt="" />
        </div>
        <p className="imp_detail_left_side">
You may perhaps suffer from diseased or damaged tooth. If so, then we will recommend you to undergo root canal procedure. This will provide relief from pain and help your teeth to become healthy again. If left undiagnosed, infection might reach your teeth’s innermost layer, considered to be the root vessel and nerve.        </p>
        <p className="imp_detail_left_side">
        We will carry out this simple, painless procedure to clean this inner layer. Otherwise, infection will spread across your tooth’s root canal system, thus causing abscess.              </p>
        <p className="imp_detail_left_side">
        We will administer a local anaesthesia so that you do not feel any pain during this procedure. Once the procedure is completed, you can return back to your work directly without any worry. But you should wait until you feel normal again from numbness before having any food.

To avail this procedure, you just need to make a single visit to our dental clinic with prior appointment. However, if you suffer from severely infected tooth, then chances are you might have to make 2 to 3 visits. We will diagnose your situation and suggest what is better for you.

          </p>

       
        <p className="imp_detail_left_side">
        After this procedure, we recommend you not to chew or bite with your treated tooth until it has restored through crown or permanent filling as deemed necessary.             </p>
        <p className="imp_detail_left_side">
        Avoid drinking or smoking and do take your prescribed pain medications.
        </p>
        <p className="imp_detail_left_side">
        We offer our patients with the latest laser-assigned root canal procedure to ensure painless treatment. Using lasers, we can easily target the infected material and bacteria growing on your teeth with great accuracy.        </p>
        <p className="imp_detail_left_side">
        We have the necessary expertise, experience and knowledge to carry out this laser-assigned root canal procedure. Our endomotor ensures highly precise, pain-free treatment. We also ensure 100% sterilization and low-level dental radiation.        </p>
        <p className="imp_detail_left_side">
        Our expert team are trained to provide all our patients with utmost care and ensure you have quick and painless root canal treatment at affordable rates.        </p>
        <p className="imp_detail_left_side">
        We will carry out this simple, painless procedure to clean this inner layer. Otherwise, infection will spread across your tooth’s root canal system, thus causing abscess.          </p>
        <p className="imp_detail_left_side">
        We will administer a local anaesthesia so that you do not feel any pain during this procedure. Once the procedure is completed, you can return back to your work directly without any worry. But you should wait until you feel normal again from numbness before having any food.        </p>
        <p className="imp_detail_left_side">
        To avail this procedure, you just need to make a single visit to our dental clinic with prior appointment. However, if you suffer from severely infected tooth, then chances are you might have to make 2 to 3 visits. We will diagnose your situation and suggest what is better for you.

After this procedure, we recommend you not to chew or bite with your treated tooth until it has restored through crown or permanent filling as deemed necessary.        </p>
        <p className="imp_detail_left_side">
        Avoid drinking or smoking and do take your prescribed pain medications.
</p>
        <p className="imp_detail_left_side">
        We offer our patients with the latest laser-assigned root canal procedure to ensure painless treatment. Using lasers, we can easily target the infected material and bacteria growing on your teeth with great accuracy.</p>
        <p className="imp_detail_left_side">
        We have the necessary expertise, experience and knowledge to carry out this laser-assigned root canal procedure. Our endomotor ensures highly precise, pain-free treatment. We also ensure 100% sterilization and low-level dental radiation.</p>
        <p className="imp_detail_left_side">
        Our expert team are trained to provide all our patients with utmost care and ensure you have quick and painless root canal treatment at affordable rates.</p>

        
      </div>
      <div className="imp_right_side_container">
        <InfoPage title="ROOT CANAL" drname1="Dr. Santosh Rathod" drname2="Dr. Vishnu Priya" dr1pic={drpic1} dr2pic={drpic2} videoid="PP9p_28bjso"/>
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

export default RootCanal