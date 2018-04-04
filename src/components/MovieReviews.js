import React from 'react'
import PropTypes from 'prop-types';
// Code MovieReviews Here

const MovieReviews = (props) => {

  const reviews = []
  props.reviews.forEach(review => {
    reviews.push(
      <div className='review'>
        <h3>{review.display_title}</h3>
      </div>
    )
  })

    return(
      <div className='review-list'>
        {reviews}
      </div>
    )
  // }
}

MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews
