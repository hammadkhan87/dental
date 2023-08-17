import React from 'react'
import "./style.scss"
import imagea from "../../images/J2I1615_1-1024x683.jpg"
const OneStopSolution = ({title,image}) => {
  return (
   <div className='t_snapshot_main_container'>
        <div className='t_left_img_container'><img src={image} alt="" /></div>
        <div className='t_right_text_container'>
        <p className='trust_left_side_title1'>AT ONE GLANCE</p>
            <p className='trust_left_side_title2'>{title}</p>
            <p className='trust_left_side_des'>World of technology, experienced hands and comprehensive oral healthcare under one roof.</p>
        </div>
    </div>
  )
}

export default OneStopSolution