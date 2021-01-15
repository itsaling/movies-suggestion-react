import "./css/style.css";
import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar.jsx";
import Movies from "./components/layouts/Movies.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const api_key = "85efa6c831a238734e8b98bde6593cdf";
let type = "popular";
class App extends Component {
  state = {
    movies: [],
    nowPlaying: [],
    upcoming: [],
    topRated: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}`)
      .then((res) => this.setState({ movies: res.data.results }));
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`)
      .then((res) => this.setState({ nowPlaying: res.data.results }));
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
      .then((res) => this.setState({ topRated: res.data.results }));
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
      .then((res) => this.setState({ upcoming: res.data.results }));
  }

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
                <div className="card-deck text-center">
                  <Movies movies={this.state.movies} />
                </div>
              </>
            )}
          ></Route>
          <Route
            path="/now-playing"
            render={(props) => (
              <>
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
                <div className="card-deck text-center">
                  <Movies movies={this.state.upcoming} />
                </div>
              </>
            )}
          ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
