import React, { useState } from 'react'
import "./style.scss"
import { PlayIcon } from '../whychooseus/playbtn';
import ReactPlayer from 'react-player/youtube';
const VideoCardPoster = ({videourl,poster}) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(videourl);
  return (
    <div className='video_card_p'>
          {show ?(<>
            <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                     playing={true}
                />
          
          </>):(<><div  className="videoItem" onClick={()=>{
                                setVideoId(videourl)
                                setShow(true)
                            }}>
                                <div className="videoThumbnail">
                                    <img src={`https://img.youtube.com/vi/${poster}/mqdefault.jpg`}/>
                                    <PlayIcon/>
                                </div>
                            </div></>) }
        </div>

    
  )
}

export default VideoCardPoster