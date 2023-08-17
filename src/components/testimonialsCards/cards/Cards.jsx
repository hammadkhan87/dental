import React from 'react'
import "./style.scss"
const Cards = ({ profilePic, name, designation, text, stars }) => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(<span key={i} className="star">&#9733;</span>);
    }
  return (
    <div className="testimonial-card">
    <div className="profile-pic">
      <img src={profilePic} alt={`${name}'s profile`} />
    </div>
    <p className='t_name'>{name}</p>
    <p className="testimonial-author">
    <span className="designation">{designation}</span>
    </p>
    <div className="stars">{starIcons}</div>
    <p className="testimonial-text">&#8220; {text} &#8221;</p>
  </div>
  )
}

export default Cards