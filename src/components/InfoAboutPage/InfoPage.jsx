import React from 'react'
import "./style.scss"
import profilepic from "../../images/J2I1580_Square.jpg"
import {ImLocation2} from "react-icons/im"
import{LuPhoneCall} from "react-icons/lu"
import{AiOutlineMail} from "react-icons/ai"
import{BsFillCalendar2RangeFill} from "react-icons/bs"
import{BiTimeFive} from "react-icons/bi"
import ReactPlayer from "react-player/youtube"
const InfoPage = () => {
  return (
    <div className='info_main_container'>
        <p className='info_min_title'>Dental Implants</p>
        <p className='info_sub_text'>Specialists</p>
        <div className='info_s_doctors'>
        <div className='team_main_cards_container'>
        <img src={profilepic} alt="" />
        <p className='team_card_name'>Dr. Santosh Rathod</p>
        </div>
        <div className='team_main_cards_container'>
        <img src={profilepic} alt="" />
        <p className='team_card_name'>Dr. Vishnu Priya</p>
        </div>
        </div>
        <p className='info_sub_text' style={{marginTop:"30px"}}>Our Clinic</p>
        <hr  style={{marginTop:"20px"}}/>

        <div className="right_icon_text">
          <span className="r_map_icon">
            <ImLocation2 />
          </span>
          <p className="r_map_text">
            72/60, Bazullah Rd, T.Nagar, TN - 600 017
          </p>
        </div>
        <div className="right_icon_text">
          <span className="r_map_icon">
            <LuPhoneCall />
          </span>
          <p className="r_map_text">
            +(91) 98400 31819
          </p>
        </div>
        <div className="right_icon_text">
          <span className="r_map_icon">
          <LuPhoneCall />
          </span>
          <p className="r_map_text">
          +(91) 4442121819
          </p>
        </div>
        <div className="right_icon_text">
          <span className="r_map_icon">
            <AiOutlineMail />
          </span>
          <p className="r_map_text">
             thebunnyteeth@gmail.com
          </p>
        </div>
        <p className='info_sub_text' style={{marginTop:"30px"}}>Clinic Hours</p>
        <hr  style={{marginTop:"20px"}}/>
        <div className="right_icon_text">
          <span className="r_map_icon">
            <BsFillCalendar2RangeFill />
          </span>
          <p className="r_map_text">
          Monday to Saturday
          </p>
        </div>
        <div className="right_icon_text">
          <span className="r_map_icon">
            <BiTimeFive />
          </span>
          <p className="r_map_text">
          10:00 AM to 8:00 PM
          </p>
        </div>
        <div className='info_end_video'>
        <ReactPlayer
                    url={`https://www.youtube.com/watch?v=PP9p_28bjso`}
                    controls
                    width="100%"
                    height="100%"
                    //  playing={true}
                />
        </div>
    </div>
  )
}
export default InfoPage