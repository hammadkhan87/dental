import React from "react";
import "./style.scss";
import profilepic from "../../images/J2I1580_Square-1024x1024.jpg";
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import { Link } from "react-router-dom";
const SantoshProfile = () => {
  return (
    <div className="ss_p_main_container">
      <div className="ss_p_title">
        <p className="ss_p_text_title">Founder & Lead Dentist</p>
      </div>
      <div className="sst_text">
        <p className="sst_title_text">Dr.Santosh Kumari</p>
        <p className="sst_title_saying">
          “We’re here to help you look and feel your best. Going to the dentist
          shouldn’t be something you dread. We want it to be fun. It sounds
          crazy. But we believe we can make it happen.”
        </p>
      </div>
      <div className="sst_container">
        <div className="sst_left_side">
            <p className="sst_des">
Dr. Santosh Kumari, a native Chennaite has a vast private practice experience spanning over 15 years in providing 
comprehensive dental care. She is also well-trained in the latest Advancements & Digital Dentistry.
 She enjoys an extensive following that includes dads, moms, grandparents, toddlers, celebrities, etc.
 </p>
            <p className="sst_des">
            In 2005, she completed her BDS (Bachelor of Dental Studies) through Merit Quota at Ragas Dental College, Chennai. She then pursued MAAID (Diploma in Implant Dentistry) at American Academy of Implant Dentistry and received 300 hours of intense training & implant placements in patients. Later in 2011, she completed her MDS (Masters in Dental Studies at Balaji Dental College, Chennai. Here, the Paediatric Dentistry department had awarded her as the best outgoing student.
 </p>
            <p className="sst_des">
            Since 2011, she has managed to earn several certifications in the field to enhance her qualifications and expertise.  Currently, she is pursuing ‘Fellowship in Orofacial Pain, Dental Sleep Medicine & Temporomandibular Disorder’ at Roseman University, USA.
 </p>
            <p className="sst_des">
            Her professional activities involve her being selected as the Chairperson in 2013 at Chettinad Health City, Kelambakkam and in 2014 at Midas Scientific Convention. She is also credited with some publications to help this field grow further for the betterment of human being.
 </p>
            <p className="sst_des">
            From 2011 to 2016, she has been into various other important roles apart from her private practice. She was the associated professor at Sri Venkateswara Dental College & Hospital. She was the Consultant Pedodontist at Dentys Clinic, Rajan Dental, Clove Dental, etc. She was also the Special Training Sr. Resident Doctor at Stanley Medical College & Hospital.comprehensive dental care. She is also well-trained in the latest Advancements & Digital Dentistry.
 She enjoys an extensive following that includes dads, moms, grandparents, toddlers, celebrities, etc.
 </p>
            <p className="sst_des">
            Currently, she is the lead dentist at ‘The Bunny Teeth Laser & Comprehensive Dental Clinic’, Chennai, with several key achievements to her profile.


 </p>
            <p className="sst_des">
            Dr. Santosh Kumari leads an active lifestyle and is dedicated to practicing and promoting a healthy lifestyle. She also spends quality time with family and has a passion for books.


 </p>
         <Link to="/bookanappointment" className="ss_apt_btn">Get Appointment</Link>
        </div>
        <div className="sst_right_side">
          <div className="sst_p_pic">
            <img src={profilepic} alt="" />
          </div>
          <div className="sst_p_icons">
            <a  href="https://www.facebook.com/santosh.kumari.7568/" target="_blank" className="p_icon"><AiFillFacebook/></a>
            <a href="https://www.instagram.com/dr_santoshrathod_dentist/?utm_medium=copy_link" target="_blank" className="p_icon"><AiOutlineInstagram/></a>
          </div>
          <p className="sst_r_name">Dr. Santosh Kumari</p>
          <p className="sst_r_sub_text">LEAD DENTIST</p>
          <hr />
          <p className="sst_r_name" style={{margin:"10px 0px"}}>Doctor Schedule</p>
          <div className="ss_shedul_container">
            <div className="ss_shedul_titles">
                <p className="shedul_title_text" style={{color:"#fa2d2d"}}>Sunday</p>
                <p className="shedul_title_text" style={{color:"#fa2d2d",fontWeight:"400"}}>Close</p>
            </div>
            <hr />
            <div className="ss_shedul_titles">
                <p className="shedul_title_text">Monday</p>
                <p className="shedul_title_text" style={{color:"#333333",fontWeight:"400"}}>10:00 AM to 7:00 PM</p>
            </div>
            <hr />
            <div className="ss_shedul_titles">
                <p className="shedul_title_text">Tuesday</p>
                <p className="shedul_title_text" style={{color:"#333333",fontWeight:"400"}}>10:00 AM to 7:00 PM</p>
            </div>
            <hr />
            <div className="ss_shedul_titles">
                <p className="shedul_title_text">Wednesday</p>
                <p className="shedul_title_text" style={{color:"#333333",fontWeight:"400"}}>10:00 AM to 7:00 PM</p>
            </div>
            <hr />
            <div className="ss_shedul_titles">
                <p className="shedul_title_text">Thursday</p>
                <p className="shedul_title_text" style={{color:"#333333",fontWeight:"400"}}>10:00 AM to 7:00 PM</p>
            </div>
            <hr />
            <div className="ss_shedul_titles">
                <p className="shedul_title_text">Friday</p>
                <p className="shedul_title_text" style={{color:"#333333",fontWeight:"400"}}>10:00 AM to 7:00 PM</p>
            </div>
            <hr />
            <div className="ss_shedul_titles">
                <p className="shedul_title_text">Saturday</p>
                <p className="shedul_title_text" style={{color:"#333333",fontWeight:"400"}}>10:00 AM to 7:00 PM</p>
            </div>
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default SantoshProfile;
