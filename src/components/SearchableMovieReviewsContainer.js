
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSearchInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }



  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label>Search for a Review</label>
          <input type='text' onChange={this.handleSearchInputChange} value={this.state.searchTerm}/>
          <button type='submit' value='Submit'></button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
