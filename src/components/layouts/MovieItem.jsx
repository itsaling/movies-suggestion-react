import React, { Component } from "react";
import MoviePopUp from "./MoviePopUp";
import moment from "moment";

class MovieItem extends Component {
  state = {
    seen: false,
  };
  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  render() {
    const {
      original_title,
      original_name,
      vote_average,
      overview,
      poster_path,
      release_date,
      first_air_date,
      backdrop_path,
      id,
    } = this.props.movie;

    const imgPath = "https://image.tmdb.org/t/p/w500";
    return (
      <>
        <div className="card">
          <i class="far fa-heart" onClick={() => this.addToFavorites(id)}></i>
          <img
            className="card-img-top"
            src={
              poster_path
                ? `${imgPath}${poster_path}`
                : `moviessuggest\src\image\placeholder-image.png`
            }
            alt={`${original_title} Poster`}
            onClick={this.togglePop}
          />
          <div className="card-vote">
            <div className="vote">{vote_average}</div>
          </div>

          <div className="card-body">
            <h4 className="card-title">
              {original_title ? original_title : original_name}
            </h4>
            <p>
              {first_air_date
                ? moment(first_air_date).format("yyyy")
                : moment(release_date).format("yyyy")}
            </p>
          </div>
        </div>
        {this.state.seen ? (
          <MoviePopUp
            togglePop={this.togglePop}
            title={original_title ? original_title : original_name}
            vote={vote_average}
            image={`${imgPath}${backdrop_path}`}
            overview={overview}
            release_date={
              first_air_date
                ? moment(first_air_date).format("yyyy")
                : moment(release_date).format("yyyy")
            }
          />
        ) : null}
      </>
    );
  }
}

export default MovieItem;
