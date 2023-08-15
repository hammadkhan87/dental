import React, { useState } from 'react'
import "./style.scss"
import {PlayIcon} from "../whychooseus/playbtn"
import ReactPlayer from "react-player/youtube";



const SaftyVideo = () => {
  const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
  return (
    <div className='video_main_cotainer'>
        
        <p className='saftyv_title' >DENTAL HYGIENE & SAFETY VIDEO</p>
        <div className='safty_video'>
          {show ?(<>
            <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                     playing={true}
                />
          
          </>):(<><div  className="videoItem" onClick={()=>{
                                setVideoId("adGzcBs_p9g")
                                setShow(true)
                            }}>
                                <div className="videoThumbnail">
                                    <img src={`https://img.youtube.com/vi/adGzcBs_p9g/mqdefault.jpg`}/>
                                    <PlayIcon/>
                                </div>
                            </div></>) }
        </div>
        
        </div>
  )
}

export default SaftyVideo