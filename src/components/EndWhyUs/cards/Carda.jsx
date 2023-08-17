import React from 'react'
import "./style.scss"
const Carda = ({logo,title,des}) => {
  return (
    <div className='ab_card'>
        <span className='abc_logo'>{logo}</span>
        <div className='abc_inner_card'><p className='abc_title'>{title}</p>
        <p className='abc_des'>{des}</p>
        </div>
    </div>
  )
}

export default Carda