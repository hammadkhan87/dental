import React from 'react'
import "./style.scss"
import endimage from "../../images/Dr.Santosh-kumari-823x1024.jpg"
const MsgLeadDentist = () => {
  return (
    <div className='msg_main_container' >
        <div className='msg_left_side'>
            <div className="msg_l_title1">MESSAGE FROM LEAD DENTIST</div>
            <div className="msg_l_title2">Let's Make Healthy Smiles Better.</div>
            <p className='msg_des'>Whether you are an existing or future patient, we take the privilege to become your valuable dental care provider! We do very well understand that we have to work hard to develop our relationship and ensure you trust in our dental services. This we plan to achieve through the following commitments made to you…</p>
            <p className='msg_des'><b><i>You come first</i></b></p>
            <p className='msg_des'>
            We promise not to take any shortcuts when providing you with relief from your dental woes. We will ensure not to break the trust that you have placed in us. Rather, you are crucial to us. We are quite thrilled to get the opportunity to solve your dental requirements as well as help achieve your set goals.
           </p>
           <p className='msg_des'><b><i>Will embrace advanced technology </i></b></p>
           <p className='msg_des'>
           We have managed to stay current with the latest dental technology to ensure providing you with superior dental treatment. We are sure to incorporate any new technological advancements or treatment technique to enhance your dental comfort and health.       
            </p>
           <p className='msg_des'><b><i>Meet highest standards</i></b></p>
           <p className='msg_des'>
           We do offer customized family dental care that you deserve. We use cosmetic and restorative dentistry while offering comprehensive treatment plans to help you achieve optimal dental health.            </p>
           <p className='msg_des'><b><i>Provide utmost care</i></b></p>
           <p className='msg_des'>
           We do boast of having a well-trained, highly qualified team combined with a welcoming environment. We are confident to provide you with that million dollar smile that you are seeking through our services. Be make informed decisions, by apprising patients the treatment procedure with our proposal and recommendations.

</p>
           <p className='msg_des'><b><i>Younger patients</i></b></p>
           <p className='msg_des'>
           We create a soothing atmosphere and provide kind dental procedures for the ever-enthusiastic younger generation. We mingle with them and make them understand each step to relax them and also provide sedation facilities.
           </p>
            <p className='msg_dec'>Sincerely, </p>           
          
        </div>
        <div className='msg_right_side'>
            <img src={endimage} alt="" />
        </div>
    
    </div>
  )
}

export default MsgLeadDentist