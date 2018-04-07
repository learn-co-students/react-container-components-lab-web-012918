import React from 'react';

const MovieReviews = (props) => {

  const reviews = []

  props.reviews.forEach(review => {
    reviews.push(
      <div className='review'>
        <h4>{review.display_title}</h4>
      </div>
    )
  })
  return (
    <div className="review-list">
      {reviews}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
