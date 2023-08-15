import React, { useState } from "react";
import "./style.scss";

import VideoPopup from "../videoPopup/VideoPopup";
const Hero = () => {
    const [show,setShow]=useState(false)
const[videoId,setVideoId]= useState(null)
  return <div className="hero_container">
     
     <div className="hero_container2">
        <div className="card">
            <div className="inner_card_div">
                <p className="t1">GET YOUR</p>
                <p className="heading_1">Beautiful Smile That Lasts Forever</p>
                <p className="text_2">A comprehensive dental procedure to enhance the pleasantness of your smile.</p>
                <button className="hero_btn"
                
                >Discover More</button>
            </div>
        </div>
        <div className="dot"onClick={()=>{
                    setShow(true)
                    setVideoId("adGzcBs_p9g")
                }}><span></span></div>
     </div>
     <VideoPopup show={show}
                                  setShow={setShow}
                                  videoId={videoId}
                                  setVideoId={setVideoId}
                                />
    </div>;
};

export default Hero;
