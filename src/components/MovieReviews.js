// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

  let reviews = props.reviews.map((review) => {
    return <div className="review">{review.display_title}: {review.summary_short}</div>
  })

  return (
    <div className="review-list">
      {reviews}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews:[]
}

export default MovieReviews
