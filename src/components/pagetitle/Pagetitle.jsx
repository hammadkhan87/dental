import React from 'react'
import "./style.scss"

const Pagetitle = ({title,fontsize}) => {
  return (
    <div className='main_title_page'>
      {fontsize ? (        <p className='text_title' style={{fontSize:`${fontsize}px`}}>{title}</p>
):(<p className='text_title'>{title}</p>
)}
    </div>
  )
}

export default Pagetitle