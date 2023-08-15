import React from 'react'
import "./style.scss"

const TeamCards = ({profilepic,name,job,link}) => {
  return (
    <div className='team_main_cards_container'>
        <img src={profilepic} alt="" />
        <p className='team_card_name'>{name}</p>
        <p className='team_card_job'>{job}</p>
    </div>
  )
}

export default TeamCards