import React from 'react'
import drpic1 from "../../images/J2I1580_Square.jpg"
import drpic2 from "../../images/Dr.jpg"
import endpic from "../../images/J2I1424-1024x711.jpg"
import "../Dental Implants/style.scss"
import imageaa from "../../images/Braces-Aligners-1024x342.jpg";
import Pagetitle from '../../components/pagetitle/Pagetitle'
import InfoPage from '../../components/InfoAboutPage/InfoPage'
import EndWhyUs from '../../components/EndWhyUs/EndWhyUs'
import { Link } from 'react-router-dom'
const OrthodonticTreatment = () => {
  return (
    <div className="implant_main_container">
    <Pagetitle title="Orthodontic Treatment" />
    <div className="imp_container_a">
      <div className="imp_left_side_container">
        <p className="imp_title">Aligners & Braces</p>
        <div className="imp_img">
          <img src={imageaa} alt="" />
        </div>
        <p className="imp_detail_left_side">
        We provide orthodontic treatment to move or straighten your teeth. This procedure when conducted can help enhance your teeth overall appearance and their functionality. It spread biting pressure across your teeth region and ensures better health of your jaw joints, gums and teeth.
        </p>
        <p className="imp_detail_left_side">
        We can help overcome the problems you face with your crooked or crowded teeth. Our procedure can move your crooked teeth into better position or straighten it as required. It also improves the way your teeth bite together and allow you to clean them effortlessly. If your ‘prominent’ teeth are damaged, then we can provide orthodontic treatment to get them back into proper line. It can also rectify incorrect bite while reducing unnecessary strain.
</p>
        <p className="imp_detail_left_side">
        We do offer such advanced dental treatments to both children and adults alike. We provide full examination involving your teeth, creating its plaster models and taking dental x-rays. After diagnosing your current teeth condition, our experts will recommend you to have the procedure at an appropriate <time className=""></time>        </p>

      
        <p className="imp_detail_left_side">
        We use different appliances to provide orthodontic treatment, commonly referred to as the ‘brace.

</p>
        <p className="imp_detail_left_side">
        Removable brace: It is perhaps a simple treatment recommended to most of our patients.


</p>
        <p className="imp_detail_left_side">
        Fixed brace: Teeth often require proper and accurate guidance. Hence, for such cases, we recommended using fixed braces. It is also referred to as a fixed appliance and you will have to visit our clinic to remove it safely.
</p>
        <p className="imp_detail_left_side">
        Treatment duration depends on the severity of your problem. However, it might take a few months to around 2 ½ years.


</p>
        <p className="imp_detail_left_side">
        Generally, orthodontic braces require proper adjustments every 4-6 weeks. After the procedure, we will suggest your next visit timing.



</p>
        <p className="imp_detail_left_side">
        We have the necessary expertise and experience to provide the very best oral treatment. Our experts will also suggest you on the dos and don’ts to follow after the procedure.



</p>
        
      </div>
      <div className="imp_right_side_container">
        <InfoPage title="Orthodontic Treatment" drname1="Dr. Santosh Rathod" drname2="Dr. Vishnu Priya" dr1pic={drpic1} dr2pic={drpic2} videoid="zl_JwElKmxI"/>
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

export default OrthodonticTreatment