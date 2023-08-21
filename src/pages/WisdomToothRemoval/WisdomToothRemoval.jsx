import React from 'react'
import drpic1 from "../../images/J2I1580_Square.jpg"
import drpic2 from "../../images/Dr.jpg"
import endpic from "../../images/wisdowm.png"
import "../Dental Implants/style.scss"
import imageaa from "../../images/wisdom-tooth_3.jpg";
import Pagetitle from '../../components/pagetitle/Pagetitle'
import InfoPage from '../../components/InfoAboutPage/InfoPage'
import EndWhyUs from '../../components/EndWhyUs/EndWhyUs'
import { Link } from 'react-router-dom'

const WisdomToothRemoval = () => {
  return (
    <div className="implant_main_container">
    <Pagetitle title="Wisdom Tooth Removal" />
    <div className="imp_container_a">
      <div className="imp_left_side_container">
        <p className="imp_title">Wisdom Tooth Removal</p>
        <div className="imp_img">
          <img src={imageaa} alt="" />
        </div>
        <p className="imp_detail_left_side">
        Often, wisdom teeth get misaligned and needs immediate removal. Otherwise, you are likely to experience intense pain, cavities and pericoronitis in your adjacent teeth. Even ulcers may develop. We can help remove your painful, misaligned wisdom teeth similar to any other tooth. For this, we recommend a minor surgical procedure, referred to as ‘Transalveolar surgery’. It is mainly done for those teeth that are impacted within the jaw bone.
        </p>
        <p className="imp_detail_left_side">
        Our qualified dentist will use local anaesthesia to carry out this painless procedure. We number half your jaw including the surrounding tissues. We create a small incision on the gum that covers your wisdom teeth. We trim the bone a bit that encases the tooth restricting eruption and remove it. Next, we use saline solution to clean properly the area, sealing it sutures. The following day, we review the procedure. After 7 to 10 days, we remove the sutures. We also prescribe a few medications to reduce pain and infection.        </p>
        <p className="imp_detail_left_side">
        Once we remove your misaligned wisdom teeth, you might experience mild swelling accompanied with pain for about three days. Taking pain killers will provide you relief. After three days, your mouth will become normal and pain-free.        </p>

       
        <p className="imp_detail_left_side">
        We also provide Conscious sedation to remove all your four wisdom teeth in a single sitting. Basically, this procedure is laughing gas therapy that has been combined with oxygen in optimum levels.   
             </p>
        <p className="imp_detail_left_side">
        We recommend Conscious Sedation to ensure carrying out multiple teeth removal with reduced visits. Throughout this procedure, you will be conscious about the surroundings, but will not feel any pain or anxiety, thereby remaining fully calm. This procedure is completely safe for all eligible patients. Our experts costly monitor the oxygen levels during the procedure to ensure safe treatment. We are confident of providing top-notch treatment and quick recovery.             </p>
        
      </div>
      <div className="imp_right_side_container">
        <InfoPage title="Wisdom Tooth Removal" drname1="Dr. Santosh Rathod" drname2="Dr. Vishnu Priya" dr1pic={drpic1} dr2pic={drpic2} videoid="5sCLSO9S8iY"/>
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

export default WisdomToothRemoval