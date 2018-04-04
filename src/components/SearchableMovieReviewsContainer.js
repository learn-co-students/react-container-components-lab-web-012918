// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='


class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.getArticles(this.state.searchTerm)
  }

  getArticles = (searchTerm) => {
    let newReviews = this.state.reviews
    let q = searchTerm
    let newUrl = URL
    newUrl += q + '&' + 'api-key=' + NYT_API_KEY
    fetch(newUrl)
    .then(res => res.json())
    .then( json => {
      json.results.forEach(movie => {
        (newReviews.length === 0 ? newReviews = [movie] : newReviews.push(movie))
      })
      this.setState({reviews: newReviews})
    })
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.searchTerm} type='text'></input>
          <input type='submit'></input>
        </form>
        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
