import React, { Component } from 'react'

export class App extends Component {
  state = {
    results: [],
  }
  // fetch data
  // https://api.themoviedb.org/3/movie/550?api_key=913ed1a1dee322c4536711b58e5bf945
  //https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=913ed1a1dee322c4536711b58e5bf945

  fetchData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=913ed1a1dee322c4536711b58e5bf945'
    )
    const data = await response.json()
    this.setState({ results: data.results })
    console.log(data)
    console.log(this.state.results)
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <div className="themovies">
          {/* put this in a component */}
          <ul className="movie list">
            {this.state.results.map((movie, index) => {
              return (
                // need to work on formatting
                <li key={movie.id}>
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  />
                  <div className="title">Title: {movie.original_title}</div>
                  <div className="plot">Plot: {movie.overview} </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
