import React from 'react'
import drpic1 from "../../images/J2I1580_Square.jpg"
import drpic2 from "../../images/Dr.jpg"
import endpic from "../../images/J2I1424-1024x711.jpg"
import "../Dental Implants/style.scss"
import imageaa from "../../images/J2I1436-1024x683.jpg";
import Pagetitle from '../../components/pagetitle/Pagetitle'
import InfoPage from '../../components/InfoAboutPage/InfoPage'
import EndWhyUs from '../../components/EndWhyUs/EndWhyUs'

const KidsDentistry = () => {
  return (
    <div className="implant_main_container">
      <Pagetitle title="Kids Dentistry" />
      <div className="imp_container_a">
        <div className="imp_left_side_container">
          <p className="imp_title">Kids Dentistry</p>
          <div className="imp_img">
            <img src={imageaa} alt="" />
          </div>
          <p className="imp_detail_left_side">
          We are very much aware of the dental problems faced by children and the
           challenges that dentists face while treating them. Hence, we have managed to develop a 
           kid-friendly environment and have toys around. This way, your child will feel comfortable at our 
           dental clinic and will look forwards to visit again for the next appointment.
          </p>
          <p className="imp_detail_left_side">
          We strongly recommend children to have bi-annual check-up to ensure they grow teeth properly 
          and in the right shape. Our dental clinic will provide you with all the information that you wish to 
          know about your child’s tooth. Whatever questions you have in mind will be answered by our expert dentists. 
          We also suggest parents to maintain oral hygiene for their babies. This will ensure that your baby’s mouth is 
          clear and clean of harmful germs.


          </p>
          <p className="imp_detail_left_side">
          We do offer various types of preventive treatment for deciduous or milk teeth.

          </p>
         
          <p className="imp_detail_left_side">
            You should take proper care of your dental implants like that of
            your natural teeth. We suggest you to visit our clinic after every
            six month for cleaning and thorough check-up to enjoy optimal oral
            health.
          </p>
          <p className="imp_detail_left_side">
            We offer our patients with multiple and single tooth implants as the
            circumstances require. Single tooth is suggested to those with
            single or several missing teeth. If there are large gaps and full
            mouth replacement is not desired, then multiple implants are
            recommended.
          </p>
          <p className="imp_detail_left_side">
            We offer another advanced procedure, named, ‘All-on-4-implants’.
            With merely 4 implants, we replace easily full single-jaw missing
            teeth. It is indeed a cost-effective solution.
          </p>
          <p className="imp_detail_left_side">
            We strongly recommend children to have bi-annual check-up to ensure
            they grow teeth properly and in the right shape. Our dental clinic
            will provide you with all the information that you wish to know
            about your child’s tooth. Whatever questions you have in mind will
            be answered by our expert dentists. We also suggest parents to
            maintain oral hygiene for their babies. This will ensure that your
            baby’s mouth is clear and clean of harmful germs.
          </p>
          <p className="imp_detail_left_side">
            We do offer various types of preventive treatment for deciduous or
            milk teeth.
          </p>
          <ul
            className="imp_detail_left_side"
            style={{ listStyleType: "disc" }}
          >
            <li>
              Fluoride Treatments: It helps increase teeth strength by
              bolstering enamel and destroying bacteria and acid.
            </li>
            <li>
              Dental sealants: We spread this translucent material on your
              child’s teeth to prevent cavity formation and further spreading.
            </li>
            <li>
              Mouth Guards: We recommend children to wear mouth guards. We
              create them at our clinic to suit your child’s unique mouth shape.
            </li>
            <li>
              Space Maintainers: We offer this fully customized, specialised
              dental appliance to suit your child’s mouth.
            </li>
          </ul>
          <p className="imp_detail_left_side">
            We also administer laughing gas sedation or sleep dentistry for kids
            based on the prevailing circumstance and needs. We generally
            recommended administering NOIS on children of 8+ years. We address
            their dental problem with intravenous sedation or Day Care General
            Anaesthesia.
          </p>
          <p className="imp_detail_left_side">
            We do understand that children are prone to panic or experience
            anxiety when visiting dentists. Hence, we make sure that your child
            is made comfort with our soothing, playful words and remove their
            anxiety and stress.
          </p>
        </div>
        <div className="imp_right_side_container">
          <InfoPage title="Kids Dentistry" drname1="Dr. Santosh Rathod" drname2="Dr. Vishnu Priya" dr1pic={drpic1} dr2pic={drpic2} videoid="s1lbN53D3i8"/>
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

export default KidsDentistry