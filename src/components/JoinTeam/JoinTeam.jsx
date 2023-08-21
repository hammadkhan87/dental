import React from 'react'
import "./style.scss"
import  imge from "../../images/J2I1563_4-1024x682.jpg"
import { Link } from 'react-router-dom'
const JoinTeam = () => {
  return (
    <div className='join_main_container'>
        <div className="join_left_side_pic"> <img src={imge} alt="" />  </div>
        <div className="join_right_side">
            <p className='join_title_1'>JOIN TEAM</p>
            <p className='join_title_2'>Let’s do it together</p>
            <p className='join_title_des'>Want to be part of an encouraging team that will let you showcase your skills and also help you enhance your experience? All you have to do is click below!</p>
               <Link className='join_btn'
               
               to="/contact">Let's Talk</Link>
</div>
    </div>
  )
}

export default JoinTeam