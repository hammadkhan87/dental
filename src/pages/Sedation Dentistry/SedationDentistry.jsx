import React from 'react'
import drpic1 from "../../images/J2I1580_Square.jpg"
import drpic2 from "../../images/Dr.jpg"
import endpic from "../../images/fgd.png"
import "../Dental Implants/style.scss"
import imageaa from "../../images/SleepDentistruy-3.jpg";
import Pagetitle from '../../components/pagetitle/Pagetitle'
import InfoPage from '../../components/InfoAboutPage/InfoPage'
import EndWhyUs from '../../components/EndWhyUs/EndWhyUs'
import { Link } from 'react-router-dom'
const SedationDentistry = () => {
  return (
    <div className="implant_main_container">
    <Pagetitle title="Sedation Dentistry" />
    <div className="imp_container_a">
      <div className="imp_left_side_container">
        <p className="imp_title">Sedation Dentistry</p>
        <div className="imp_img">
          <img src={imageaa} alt="" />
        </div>
        <p className="imp_detail_left_side">
        We are aware that some patients experience very high anxiety levels when making dental visits. It is this fear of having to bear the pain that restricts many patients to make the visit. However,
         we are well-trained to provide top-quality sedation or sleep dentistry, thus reducing your fears.
        </p>
        <p className="imp_detail_left_side">
        With sedation dentistry, you can feel fully relaxed while undergoing the dental procedure. Although you do not sleep, you become less aware of the immediate surroundings. You will simply not know what our dentists will be performing except follow some basic instructions. We administer this sedation intravenously, through your veins.




        </p>
        <p className="imp_detail_left_side">
        Sedation works very quickly and you are likely to feel very less or no pain throughout the procedure. Our qualified and experienced dentist will constantly monitor your vitals. Accordingly, the sedation dosage will be adjusted according to your health requirements. You will experience amnesia for a long period, thus making you unaware about what is going on with the procedure. This amnesia condition allows us to carry out multiple procedures as required in just a single appointment.



        </p>
       
        <p className="imp_detail_left_side">
        We will first diagnose your prevailing health condition and check your existing medication use and medical history. This is to find out if your body can permit taking sedation density procedures or not. Patients with significant medical considerations or of more age will require consulting their medical specialist or primary physician first. For IV Sedation, good candidates are those:


        </p>
       
       
       
        <ul
          className="imp_detail_left_side"
          style={{ listStyleType: "disc" }}
        >
          <li>
          Requiring multiple or longer dentistry procedures

          </li>
          <li>
          Having strong gag reflected

          </li>
          <li>
          Require to undergo painful dental work

          </li>
          <li>
          exhibiting high to moderate dental anxiety
          </li>
        </ul>
        <p className="imp_detail_left_side">
        Our talented dentists will provide you with a sitting and will explain to you the entire procedure and how it is done. This way, we will remove all your anxiety and ensure providing the best possible sedation dentistry procedures.
        </p>
        <p className="imp_detail_left_side">
        We will carry out this simple, painless procedure to clean this inner layer. Otherwise, infection 
        will spread across your tooth’s root canal system, thus causing abscess.  
        </p>
        <p className="imp_detail_left_side">
        We will administer a local anaesthesia so that you do not feel any pain during this procedure. Once the procedure is completed, you can return back to your work directly without any worry. But you should wait until you feel normal again from numbness before having any food.  
        </p>
        <p className="imp_detail_left_side">
        To avail this procedure, you just need to make a single visit to our dental clinic with prior appointment. However, if you suffer from severely infected tooth, then chances are you might have to make 2 to 3 visits. We will diagnose your situation and suggest what is better for you.  
        </p>
        <p className="imp_detail_left_side">
        We will carry out this simple, painless procedure to clean this inner layer. Otherwise, infection 
        will spread across your tooth’s root canal system, thus causing abscess.  
        </p>
        <p className="imp_detail_left_side">
        After this procedure, we recommend you not to chew or bite with your treated tooth until it has restored through crown or permanent filling as deemed necessary.
        </p>
        <p className="imp_detail_left_side">
        We will administer a local anaesthesia so that you do not feel any pain during this procedure. Once the procedure is completed, you can return back to your work directly without any worry. But you should wait until you feel normal again from numbness before having any food.
        </p>
        <p className="imp_detail_left_side">
        To avail this procedure, you just need to make a single visit to our dental clinic with prior appointment. However, if you suffer from severely infected tooth, then chances are you might have to make 2 to 3 visits. We will diagnose your situation and suggest what is better for you.        </p>
        <p className="imp_detail_left_side">
        We have the necessary expertise, experience and knowledge to carry out this laser-assigned root canal procedure. Our endomotor ensures highly precise, pain-free treatment. We also ensure 100% sterilization and low-level dental radiation.        </p>
        <p className="imp_detail_left_side">
        Our expert team are trained to provide all our patients with utmost care and ensure you have quick and painless root canal treatment at affordable rates.        </p>
      </div>
      <div className="imp_right_side_container">
        <InfoPage title="SLEEP DENTISTRY" drname1="Dr. Santosh Rathod" drname2="Dr. Vishnu Priya" dr1pic={drpic1} dr2pic={drpic2} videoid="we7HAVwEIXw"/>
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

export default SedationDentistry