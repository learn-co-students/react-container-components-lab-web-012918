// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews:[],
      searchTerm: ""
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    let movie = event.target.children[0].value
    debugger
    fetch(URL+`${movie}`)
    .then(data => data.json())
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })

  }

  inputChange = (event) => {
    
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitHandler}>
          <input placeholder="Enter movie" onChange={this.inputChange} />
          <button>Submit</button>
        </form>
          {this.state.searchTerm === null ? null : <MovieReviews reviews={this.state.reviews}/>}
      </div>
    )
  }
}
