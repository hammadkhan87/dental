import React from 'react'
import "./style.scss"
import imagea from "../../images/J2I1424-1024x711.jpg"
const TreatSnapshot = () => {
  return (
    <div className='t_snapshot_main_container'>
        <div className='t_left_img_container'><img src={imagea} alt="" /></div>
        <div className='t_right_text_container'>
        <p className='trust_left_side_title1'>AT ONE GLANCE</p>
            <p className='trust_left_side_title2'>Snapshot</p>
            <p className='trust_left_side_des'>World of technology, experienced hands and comprehensive oral healthcare under one roof.</p>
        </div>
    </div>
  )
}

export default TreatSnapshot