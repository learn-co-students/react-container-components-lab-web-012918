import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      reviews: []
    }
    this.getMovies()
  }

  getMovies = () => {
    let newReviews = this.state.reviews
    fetch(URL)
    .then(res => res.json())
    .then(json => {
      json.results.forEach(movie => {
        (newReviews.length === 0 ? newReviews = [movie] : newReviews.push(movie))
        this.setState({reviews: newReviews})
      })
    })
  }

  render(){
    return(
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
