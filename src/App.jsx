import React, { Component } from 'react'
// import Movie from '.components/Movie.jsx'
// import Movie from '.src/components/Movie.jsx'
import Movie from '/Users/victoriatiller/Desktop/sdg/party-like-its-1989/src/components/Movie.jsx'

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
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
        </style>
        <h1>Movies</h1>
        <div className="the movies">
          {/* put this in a component-- done */}
          <Movie srsly={this.state.results} />
        </div>
      </div>
    )
  }
}
