import React, { useState } from "react";
import "./style.scss";
import { PlayIcon } from "./playbtn";
import ReactPlayer from "react-player/youtube";
import VideoPopup from "../videoPopup/VideoPopup";
import { Link } from "react-router-dom";
const WhyChooseUs = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  return (
    <div className="why_main_container_a">
      <div className="left_side_whyus_a"></div>
      <div className="right_side_whyus_a">
        <div className="right_side_inner_div">
          <p className="first_title">WHY CHOOSE US</p>
          <p className="right_side_second_title">
            We are confident of helping you to get back your lost smile
          </p>
          <p className="right_side_text_1">
            You can trust in our dental experts to get remedy for various types
            of dental ailments that you may be facing. You can contact our
            clinic and get an appointment from one of our learned and
            experienced dentists with great ease.
          </p>
          <p className="right_side_text_1">
            We also use modern technology and have incorporated the latest
            equipments and accessories required to provide quality treatment. We
            make sure every patient who comes to our clinic goes back satisfied
            and happy..
          </p>
          <p className="first_title" style={{ marginTop: "20px" }}>
            OUR HI-TECH DENTAL CLINIC
          </p>
          <div className="right_side_video_div">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=DO9ppWB070c`}
              controls
              width="100%"
              height="100%"
              // playing={true}
            />
          </div>
          <div className="right_side_btn_div">
            <Link className="hero_btn" to="/about">Discover More</Link>

            <div
              className="playbtn"
              onClick={() => {
                setShow(true);
                setVideoId("K4qvMAxWWfQ");
              }}
            >
              <PlayIcon />
              <span className="text">Watch Video</span>
            </div>
          </div>
          <div className="right_side_count_card_div">
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
          </div>
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

export default WhyChooseUs;
