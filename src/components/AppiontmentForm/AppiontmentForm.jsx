import React, { useState } from 'react'
import "./style.scss"
import { PlayIcon } from '../whychooseus/playbtn'
import videoimg from "../../images/2021-08-09-11.jpg"
import ReactPlayer from "react-player/youtube";
import VideoPopup from '../videoPopup/VideoPopup';
import { Link } from 'react-router-dom';
const AppiontmentForm = () => {
    const [show, setShow] = useState(false);
    const [showa, setShowa] = useState(false);
    const [videoIda, setVideoIda] = useState(null);
    const [videoId, setVideoId] = useState(null);
  return (
    <div className='aptmt_main_container'>
        <div className='aptmt_inner_card'>
            <p className='aptmt_title1'>FILL FORM</p>
            <p className='aptmt_title2'>Book An Appointment</p>
            <form action="" className='aptmt_form'>
                <label htmlFor="" className='text_input'>Name*</label>
                <input type="text" className='amptmt_input' />
                <label htmlFor="" className='text_input'> Mobile Number*</label>
                <input type="phone" className='amptmt_input' />
                <label htmlFor="" className='text_input'>Your Email*</label>
                <input type="email" className='amptmt_input' />
                <label htmlFor="" className='text_input'>Date*</label>
                <input type="date" className='amptmt_input' />
                <label htmlFor="" className='text_input'>Time</label>
                <input type="text" className='amptmt_input' />
                <label htmlFor="" className='text_input'>Your Message</label>
                <textarea type="text" className='amptmt_input' style={{height:"33vh"}} />
                <button type='submit' className='amptmt_btn'>Submit</button>
            </form>
            <div className='video_div_ampt'>
            {showa ? (
          <>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoIda}`}
              controls
              width="100%"
              height="100%"
              playing={true}
            />
          </>
        ) : (
          <>
            <div
              className="videoItem"
              onClick={() => {
                setVideoIda("SCSh_oOatXc");
                setShowa(true);
              }}
            >
              <div className="videoThumbnail">
                <img
                  src={videoimg}
                  alt="video_image"
                />
                <PlayIcon />
              </div>
            </div>
          </>
        )}
            </div>
            <div className="right_side_btn_div">
             <Link to="/about" className='hero_btn'>About Us</Link>

            <div
              className="playbtn"
              onClick={() => {
                setShow(true);
                setVideoId("adGzcBs_p9g");
              }}
            >
              <PlayIcon />
              <span className="text">VIDEO ON SAFETY & HYGIENE</span>
            </div>
          </div>
          <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
        </div>
    </div>
  )
}

export default AppiontmentForm