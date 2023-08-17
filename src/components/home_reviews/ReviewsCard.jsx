import React, { useState } from 'react'
import "./style.scss"
import AutoplayCarousel from '../AutoplayCarousel/AutoplayCarousel'
import {AiOutlineGoogle} from "react-icons/ai"
import Videocards from './videocards/Videocards';
import DentalTipsVideos from './dentaltipsvideos/DentalTipsVideos';
import{ImYoutube} from "react-icons/im"
export const ReviewsCard = () => {
    
      
   
  return (
    <div className='rew_main-contaner'> 
    <div className='rew_inner_main_card'> 
    <p className='rew_title_1'>
    PATIENT SPEAKS

    </p>
    <p className='rew_title_2'>
    What They Say
    
    </p>
   <AutoplayCarousel/>

   <span className='rew_text_e'><b>Google</b> rating score : <b>4.9</b> of 5,based on <b> 103 reviews</b></span>
   
   <div className='rew_more_testimonial'><p className='rew_more_text1'>Check Out More Testimonials here</p><span className='rew_more_icon'><AiOutlineGoogle/></span></div>
   <p className='rew_title_1'>
    PATIENT SPEAKS

    </p>
    <p className='rew_title_2' style={{fontSize:"46px"}}>
    What They Speak
    </p>
   <Videocards/>
   <p className='rew_title_1' style={{marginTop:"30px"}}>
   DENTAL TIPS

    </p>
    <p className='rew_title_2' style={{fontSize:"46px"}}>
    What Our Dentist has to Say
    </p>
    <DentalTipsVideos/>
    <div className='rew_more_testimonial'><p className='rew_more_text1'>Check Out More Videos here
</p><span className='rew_more_icon' style={{backgroundColor:"red"}}><ImYoutube/></span></div>

    </div>
    
    </div>
  )
}
