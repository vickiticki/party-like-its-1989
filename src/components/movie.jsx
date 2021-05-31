import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div>
        <ul className="movie list">
          {this.props.srsly.map((movie, index) => {
            return (
              <li key={movie.id}>
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                />
                <div className="text">
                  <div className="title">{movie.original_title}</div>
                  <div className="plot">Plot: {movie.overview} </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default Movie
