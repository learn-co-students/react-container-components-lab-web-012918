// Code MovieReviews Here

import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
    {props.reviews.map(review=>{ return(
      <div key={review.headline} className="review">
          <p> {review.headline} </p>
      </div>
    )
    })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
