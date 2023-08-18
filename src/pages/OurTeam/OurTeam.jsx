import React from 'react'
import "./style.scss"
import Pagetitle from '../../components/pagetitle/Pagetitle'
import AwesomeDentists from '../../components/AwesomeDentists/AwesomeDentists'
import JoinTeam from '../../components/JoinTeam/JoinTeam'
import MsgLeadDentist from '../../components/msgleaddentist/MsgLeadDentist'
const OurTeam = () => {
  return (
    <div className='our_team_main_container'>
     <Pagetitle title="DENTIST"/>
     <AwesomeDentists/>
     <JoinTeam/>
    <MsgLeadDentist/>
    </div>
  )
}

export default OurTeam