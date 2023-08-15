import React from 'react'
import "./style.scss"

const Pagetitle = ({title}) => {
  return (
    <div className='main_title_page'>
        <p className='text_title'>{title}</p>
    </div>
  )
}

export default Pagetitle