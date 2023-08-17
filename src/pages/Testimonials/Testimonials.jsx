import React from 'react'
import Pagetitle from '../../components/pagetitle/Pagetitle'
import TestimonialCards from '../../components/testimonialsCards/TestimonialCards'

const Testimonials = () => {
  return (
    <div className='testimonial_main_container'>
        <Pagetitle title={"Testimonials"}/>
        <TestimonialCards/>
    </div>
  )
}

export default Testimonials