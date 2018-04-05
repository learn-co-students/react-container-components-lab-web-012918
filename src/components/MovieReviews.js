// Code MovieReviews Here
import React from 'react'

const Review = ({title, headline, shortSummary, openingDate}) => {
  return (
    <div className='review'>
      <h2>Title: {title}</h2>
      <h3>Headline: {headline}</h3>
      <p>Short Summary: {shortSummary}</p>
      <p>Opening Date: {openingDate}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
