import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor () {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  searchReviews = (event) => {
    event.preventDefault()
    const value = this.state.value

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(json => {this.setState({reviews: json.results})})
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <h5>Search Reviews:</h5>
        <form onSubmit={this.searchReviews}>
          <input onChange={this.handleChange} value={this.state.searchTerm} type='text' />
          <input type='submit' />
        </form>
        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}
