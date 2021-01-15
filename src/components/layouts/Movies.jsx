import React, { Component } from "react";
import MovieItem from "./MovieItem";

class Movies extends Component {
  render() {
    return this.props.movies.map((movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ));
    // return this.props.movies.map((movie) => <h1>{movie.original_title}</h1>);
  }
}

export default Movies;
