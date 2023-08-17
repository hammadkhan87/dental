import React from 'react'
import "./style.scss"
import Pagetitle from '../../components/pagetitle/Pagetitle'
import TreatSnapshot from '../../components/treatmentSnapshot/TreatSnapshot'
import DentalServices from '../../components/Dentalservices/DentalServices'
import WhyTrust from '../../components/WHY TRUST/WhyTrust'
import OverSpeciality from '../../components/overspeciality/OverSpeciality'
import AboutReviews from '../../components/about_reviews/AboutReviews'
const Treatments = () => {
  return (
    <div className='tret_main_container'>
        <Pagetitle title={"Treatments"}/>
        <TreatSnapshot/>
        <DentalServices/>
        <WhyTrust/>
        <OverSpeciality/>
        <AboutReviews/>

    </div>
  )
}

export default Treatments