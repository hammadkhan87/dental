import React from 'react'
import "./style.scss"
import Pagetitle from '../../components/pagetitle/Pagetitle'
import CallUs from '../../components/Callus/CallUs'
import AppiontmentForm from '../../components/AppiontmentForm/AppiontmentForm'
import EndInfo from './endinfopart/EndInfo'
const BookanAppointment = () => {
  return (
    <div className='dddd'>
        <Pagetitle title="Book an Appointment"/>
        <CallUs/>
        <AppiontmentForm/>
        <EndInfo/>
    </div>
  )
}

export default BookanAppointment