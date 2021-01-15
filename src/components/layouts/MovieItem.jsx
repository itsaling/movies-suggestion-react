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
      vote_average,
      overview,
      poster_path,
      release_date,
      backdrop_path,
    } = this.props.movie;

    const imgPath = "https://image.tmdb.org/t/p/w500";
    return (
      <>
        <div className="card" onClick={this.togglePop}>
          <img
            className="card-img-top"
            src={`${imgPath}${poster_path}`}
            alt={original_title}
          />
          <div className="card-vote">
            <div className="vote">{vote_average}</div>
          </div>
          <div className="card-body">
            <h4 className="card-title">{original_title}</h4>
            <p>{moment(release_date).format("ll")}</p>
            {/* <p className="card-text">{overview}</p> */}
          </div>
        </div>
        {this.state.seen ? (
          <MoviePopUp
            togglePop={this.togglePop}
            title={original_title}
            vote={vote_average}
            image={`${imgPath}${backdrop_path}`}
            overview={overview}
          />
        ) : null}
      </>
    );
  }
}

export default MovieItem;
