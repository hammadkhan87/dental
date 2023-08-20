import React, { useState } from 'react'
import "./style.scss"
import { PlayIcon } from '../whychooseus/playbtn'
import ReactPlayer from "react-player/youtube";
import VideoPopup from '../videoPopup/VideoPopup';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
  return (
    <div className='aboutus_main_container'>
     <div className="left_side_whyus"></div>
      <div className="right_side_whyus">
        <div className="right_side_inner_div">
          <p className="first_title">ABOUT US</p>
          <p className="right_side_second_title">
          We are one of the leading Dental Clinic
          </p>
          <p className="right_side_text_1">
          equipped with latest technology. Our philosophy of happy smiles is defined by personalized care and high-tech treatments to
           our patients. Our ever enthusiastic and qualified family of dentists bring with them 
          wide experience in their respective domains. We consider our duty completed when we provide complete patient satisfaction.
          </p>
          <p className="right_side_text_1">
          Our gentle approach has been an attractive force because of which we have been able to cater to patients of all
           ages from toddlers to adults. Parents have a strong faith in our dedication towards our young patients. The interactions 
           and relaxing environment created by us has been a winner among younger 
          patients. We become a part of their family providing utmost care and correct solutions for their dental problems.
          </p>
          <p className="right_side_text_1">
          We are always available for patients to handle all types of emergency situations. Our friendly staff are well
           equipped for seamless follow up system which is appreciated always. We never compromise in providing highest standards of 
           dental and safety procedures. You can entrust us with your utmost dental concerns and 
          we promise to come up with tailor made solutions and ultimately associating with you for best oral health.
          </p>
          {/* <p className="first_title" style={{ marginTop: "20px" }}>
            OUR HI-TECH DENTAL CLINIC
          </p> */}
          <div className="right_side_video_div">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=SCSh_oOatXc`}
              controls
              width="100%"
              height="100%"
              // playing={true}
            />
          </div>
          <div className="right_side_btn_div">
            <Link className="hero_btn" to="/">Discover More</Link>

            <div
              className="playbtn"
              onClick={() => {
                setShow(true);
                setVideoId("adGzcBs_p9g&t");
              }}
            >
              <PlayIcon />
              <span className="text">Watch Video</span>
            </div>
          </div>
          {/* <div className="right_side_count_card_div">
            <div className="inner_count_div">
              <span className="count_text_1">7,500 +</span>
              <span className="count_text_2">ROOT CANALS DONE</span>
            </div>
            <div className="inner_count_div">
              <span className="count_text_1">2,500 +</span>
              <span className="count_text_2">IMPLANTS PLACED</span>
            </div>
            <div className="inner_count_div">
              <span className="count_text_1">500 +</span>
              <span className="count_text_2">SMILE MAKEOVERS</span>
            </div>
          </div> */}
        </div>
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />

    </div>
  )
}

export default AboutUsSection