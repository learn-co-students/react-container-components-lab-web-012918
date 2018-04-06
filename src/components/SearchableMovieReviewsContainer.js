// Code SearchableMovieReviewsContainer Here
import React from 'react'
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({searchTerm: e.target.children[2].value}, () => {
      fetch(BASE_URL + this.state.searchTerm)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }));
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label/>Search Reviews
          <br/>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
        <h2>Movie Reviews by Search: </h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
