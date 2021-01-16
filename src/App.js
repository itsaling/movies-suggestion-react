import "./css/style.css";
import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar.jsx";
import Movies from "./components/layouts/Movies.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    movies: [],
    nowPlaying: [],
    upcoming: [],
    topRated: [],
    tv: [],
    trending: [],
    favorites: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => this.setState({ movies: res.data.results }));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => this.setState({ nowPlaying: res.data.results }));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => this.setState({ topRated: res.data.results }));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => this.setState({ upcoming: res.data.results }));
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
      )
      .then((res) => this.setState({ tv: res.data.results }));
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => this.setState({ trending: res.data.results }));
  }
  // addToFavorites = (favorite) => {
  //   const { favorites } = this.state;
  //   if (
  //     !favorites.some((alreadyFavorite) => alreadyFavorite.id == favorite.id)
  //   ) {
  //     this.setState({ favorites: [...this.state.favorites, favorite] });
  //   }
  // };
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <div className="container-fluid mt-4">
                  <h2 className="header">Trending</h2>
                </div>
                <div className="card-deck text-center">
                  <Movies movies={this.state.trending} />
                </div>
                <div className="container-fluid mt-4">
                  <h2 className="header">Popular Movies</h2>
                </div>
                <div className="card-deck text-center">
                  <Movies movies={this.state.movies} />
                </div>
                <div className="container-fluid mt-4">
                  <h2 className="header">Popular TV Shows</h2>
                </div>
                <div className="card-deck text-center">
                  <Movies movies={this.state.tv} />
                </div>
                <div className="container-fluid mt-4">
                  <h2 className="header">Upcoming</h2>
                </div>
                <div className="card-deck text-center">
                  <Movies movies={this.state.upcoming} />
                </div>
              </>
            )}
          ></Route>
          <Route
            path="/tv-shows"
            render={(props) => (
              <>
                <div className="container-fluid mt-4">
                  <h2 className="header">TV Shows</h2>
                </div>
                <div className="card-deck text-center">
                  <Movies movies={this.state.tv} />
                </div>
              </>
            )}
          ></Route>
          <Route
            path="/now-playing"
            render={(props) => (
              <>
                <div className="container-fluid mt-4">
                  <h2 className="header">Now Playing</h2>
                </div>
                <div className="card-deck text-center">
                  <Movies movies={this.state.nowPlaying} />
                </div>
              </>
            )}
          ></Route>
          <Route
            path="/top-rated"
            render={(props) => (
              <>
                <div className="container-fluid mt-4">
                  <h2 className="header">Top Rated</h2>
                </div>
                <div className="card-deck text-center">
                  <Movies movies={this.state.topRated} />
                </div>
              </>
            )}
          ></Route>
          <Route
            path="/upcoming"
            render={(props) => (
              <>
                <div className="container-fluid mt-4">
                  <h2 className="header">Upcoming</h2>
                </div>
                <div className="card-deck text-center">
                  <Movies movies={this.state.upcoming} />
                </div>
              </>
            )}
          ></Route>
          <Route
            path="/favorites"
            render={(props) => (
              <>
                <div className="container-fluid mt-4">
                  <h2 className="header">Favorites</h2>
                </div>
                <div className="card-deck text-center"></div>
              </>
            )}
          ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
