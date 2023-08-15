import React from 'react'
import "./style.scss"
const AimCard = ({logo,title,des}) => {
  return (
    <div className='aim_main_card_a'>
        <span className='aim_card_logo'>{logo}</span>
        <p className='aim_card_title'>{title}</p>
        <p className='aim_card_des'>{des}</p>
    </div>
  )
}

export default AimCard