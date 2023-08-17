import React from 'react'
import "./style.scss"
import Carda from './cards/Carda'
import{BiTimeFive} from "react-icons/bi"
import{GiTechnoHeart} from "react-icons/gi"
import{HiOutlineUserGroup} from "react-icons/hi"
import{MdAddHomeWork} from "react-icons/md"

const EndWhyUs = () => {
  return (
    <div className='end_us_main_container'>
        
        <div className='end_inner_div'>
        <p className='end_imp_title'>Why Choose Us</p>
            <div className='end_cards_first2' >
                <Carda logo={<GiTechnoHeart/>} title="TECHNOLOGY @ ARMS REACH " des="The complex and cutting edge technology is always adopted and adapted in our day to day practices with a clear mission to provide world class services"/>
                <Carda logo={<HiOutlineUserGroup/>} title="EFFICIENT team " des="The pillars of strength are our experienced dentist, technicians and support staffs who contribute to our success story. Without them neither our patients nor us can adorn the crown"/>
            </div>
            <div className='end_cards_second2' >
            <Carda logo={<HiOutlineUserGroup/>} title="REVIEW MECHANISM " des="Our close call on each and every patient, before and after their treatment, gives them immense confidence that they are being taken care in the right way"/>
            <Carda logo={<MdAddHomeWork/>} title="ENVIRONMENT & EQUIPMENT " des="Utilization of Class B Autoclave Sterilizer is an indication which emphasizes the importance given to hygiene and environmental health. Nevertheless “Cleanliness is close to godliness”"/>

            </div>
        </div>
        </div>
  )
}

export default EndWhyUs