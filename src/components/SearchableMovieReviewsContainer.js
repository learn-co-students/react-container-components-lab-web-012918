// Code SearchableMovieReviewsContainer Here

import React from 'react'

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state={
      reviews: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    //don't need this b/c submit will always be pressed after render
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL.concat(this.state.searchTerm)).then(resp=>resp.json()).then(json=>{
      this.setState({
        reviews: json.results
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
