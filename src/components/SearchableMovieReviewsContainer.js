// Code SearchableMovieReviewsContainer Here
import 'isomorphic-fetch';
import React from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' // + search term


export default class SearchableMovieReviewsContainer extends React.Component {

  state = {
    searchTerm: '',
    reviews: []
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  searchForReviews = (e) => {
    e.preventDefault()
    const value = this.state.value
    fetch(URL + value + `&api-key=${NYT_API_KEY}`).then(res => res.json()).then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }


  render(){
    return(
      <div className='searchable-movie-reviews'>
        <h1>Search for a movie review:</h1>
        <form onSubmit={this.searchForReviews}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button type='submit' >SUBMIT</button>
        </form>

        <h1>Search Results</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}
