// Code MovieReviews Here
import React from 'react';


class Review extends React.Component {
  render(){
    return(
      <div className='review'>
        <h3>{this.props.review.display_title}</h3>
        <h4>{this.props.review.headline}</h4>
        <h5>{this.props.review.byline}</h5>
      </div>
    )
  }
}

export default class MovieReviews extends React.Component {

  makeReviews = () => {

    return this.props.reviews.map(review => {
      return <Review review={review}/>
    })
  }

  render(){
    return(
      <div className='review-list'>
        {this.makeReviews()}
      </div>
    )
  }

}
