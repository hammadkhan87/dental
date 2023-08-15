import React, { useState } from 'react'
import "./style.scss"
import { PlayIcon } from "../whychooseus/playbtn";
import ReactPlayer from "react-player/youtube";
import bgimg  from "../../images/2021-07-30-1-1.jpg"

const ClinicInteriorVideo = () => {
    const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  return (
    <div className='clinic_in_main_div'>
        <p className='clinic_in_title'>Our Clinic Interior</p>
        <div className='clinic_in_video'>

        <div className="safty_video">
        {show ? (
          <>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
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
                setVideoId("8Xv0K2RJ8eo");
                setShow(true);
              }}
            >
              <div className="videoThumbnail">
                <img
                  src={bgimg}
                  alt='video_image'
                />
                <PlayIcon />
              </div>
            </div>
          </>
        )}
      </div>
        </div>
    </div>
  )
}

export default ClinicInteriorVideo