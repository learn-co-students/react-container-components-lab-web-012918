// Code MovieReviews Here
import React from 'react'
import uuid from 'uuid'

const Review = ({ display_title, link, headline, byline, summary_short }) => {
  return (
    <div key={ uuid.v4() } className="review">
      <a className="review-link" href={ link.url }>{ headline }</a>
      <br/>
      <p className="author">{ byline }</p>
      <p>{ summary_short }</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      { reviews.map( review => Review(review) ) }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
