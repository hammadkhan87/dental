import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import VideoPopup from "../videoPopup/VideoPopup";
const Hero = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  return (
    <div className="hero_container">
      <div className="hero_container2">
        <div className="card">
          <div className="inner_card_div">
            <p className="t1">GET YOUR</p>
            <p className="heading_1">Beautiful Smile That Lasts Forever</p>
            <p className="text_2">
              A comprehensive dental procedure to enhance the pleasantness of
              your smile.
            </p>
            <Link className="hero_btn" to="/SmileMakeOver" >Discover More</Link>
          </div>
        </div>
        <div
          className="dot"
          
        >
          <span onClick={() => {
            setShow(true);
            setVideoId("adGzcBs_p9g");
          }}></span>
        </div>
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default Hero;
