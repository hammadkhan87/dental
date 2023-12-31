import React from 'react'
import Pagetitle from '../../components/pagetitle/Pagetitle'
import AboutUsSection from '../../components/aboutus/AboutUsSection'
import MeetTeam from '../../components/meettheteam/MeetTeam'
import OverSpeciality from "../../components/overspeciality/OverSpeciality";
import ClinicInteriorVideo from '../../components/clinicinterior/ClinicInteriorVideo';
import WhyTrust from '../../components/WHY TRUST/WhyTrust';
import Aimcards from '../../components/aboutAimCards/Aimcards';
import AboutReviews from '../../components/about_reviews/AboutReviews';
import Location from '../../components/maplocation/Location';


const About = () => {
  return (
    <div className='about_main_continer'> 
    <Pagetitle title={"About Us"}/>
    <AboutUsSection/>
    <MeetTeam/>
    <OverSpeciality/>
    <ClinicInteriorVideo/>
    <WhyTrust/>
    <Aimcards/>
    <AboutReviews/>
    <Location/>
    
    </div>
  )
}

export default About