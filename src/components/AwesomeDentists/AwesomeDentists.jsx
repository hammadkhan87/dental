import React from 'react'
import "./style.scss"
import TeamCards from '../teamcards/TeamCards'
import drpica from "../../images/J2I1580.jpg"
import drpicb from "../../images/Dr.jpg"
import drpicc from "../../images/AJ2I4601.jpg"
import drpicd from "../../images/AJ2I4586.jpg"
import drpice from "../../images/Kotteswari.jpg"
import drpicf from "../../images/Nithya.jpg"
const AwesomeDentists = () => {
  return (
    <div className='team_main_container'>
    <p className='team_title_1'>MEET THE TEAM</p>
    <p className='team_title_2'>Awesome Dentist's</p>
    <div className='team_cards_main_container'>
      <TeamCards profilepic={drpica} name={"Dr. Santosh Kumari Rathod"} job={"Lead Dentist"}/>
      <TeamCards profilepic={drpicb} name={"Dr. Vishnu Priya"} job={"Associate Dentist"}/>
      <TeamCards profilepic={drpicc} name={"Dr. Afshan Hassan.K"} job={"Restorative Dentist"}/>
      <TeamCards profilepic={drpicd} name={"Dr Sivaranjini"} job={"Restorative Dentist"}/>
      <TeamCards profilepic={drpice} name={"Kotteswari"} job={"Nursing Staff"}/>
      <TeamCards profilepic={drpicf} name={"Nithya"} job={"Receptionist"}/>
    </div>
  </div>
  )
}

export default AwesomeDentists