import React, { useState } from 'react'
import "./style.scss"
import AutoplayCarousel from '../AutoplayCarousel/AutoplayCarousel'
import Videocards from '../home_reviews/videocards/Videocards'
import DentalTipsVideos from '../home_reviews/dentaltipsvideos/DentalTipsVideos'
const AboutReviews = () => {
  return (
    <div className='about_rew_main_container'>

        <div className='about_rew_inner_ab'>
        <p className='rew_title_1'>
    PATIENT SPEAKS

    </p>
    <p className='rew_title_2'>
    What They Say
    
    </p>
   <AutoplayCarousel/>

   <span className='rew_text_e'><b>Google</b> rating score : <b>4.9</b> of 5,based on <b> 103 reviews</b></span>
        </div>

        <p className='rew_title_1'>
    PATIENT SPEAKS

    </p>
    <p className='rew_title_2_c'>
    What They Speak
    </p>
   <Videocards/>
   <p className='rew_title_1'>
   DENTAL TIPS

    </p>
    <p className='rew_title_2_c'>
    What Our Dentist has to Say
    </p>
    <DentalTipsVideos/>
    </div>
  )
}

export default AboutReviews