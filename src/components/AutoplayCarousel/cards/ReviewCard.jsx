import React, { useState } from 'react';
import './style.scss';

const ReviewCard = ({ profilePic, name, date, stars, description }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="review-card"> 
      <div className="profile">
        <img src={profilePic} alt={`${name}'s profile`} />
        <span className="name">{name}</span>
      </div>
      <div className="date">{date}</div>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < stars ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
      <div className={`description ${showMore ? 'expanded' : ''}`}>
        {description}
      </div>
      {description.length > 120 && (
        <button className="load-more" onClick={toggleDescription}>
          {showMore ? 'Show Less' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
