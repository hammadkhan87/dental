import React from 'react'
import "./style.scss"
import ReactPlayer from 'react-player/youtube';

const DentalTipsVideos = () => {
  return (
    <div className='dental_tips_video_container'>
        <div className='dental_video_card'>
        <ReactPlayer
                    url={`https://www.youtube.com/watch?v=zl_JwElKmxI`}
                    controls
                    width="100%"
                    height="100%"
                    //  playing={true}
                />
        </div>
        <div className='dental_video_card'>
        <ReactPlayer
                    url={`https://www.youtube.com/watch?v=5sCLSO9S8iY`}
                    controls
                    width="100%"
                    height="100%"
                    //  playing={true}
                />
        </div>
        <div className='dental_video_card'>
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

export default DentalTipsVideos