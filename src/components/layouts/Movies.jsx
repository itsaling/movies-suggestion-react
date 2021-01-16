import React, { Component } from "react";
import MovieItem from "./MovieItem";

class Movies extends Component {
  render() {
    return this.props.movies.map((movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ));
  }
}

export default Movies;
