import React, {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useState,
} from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

//inital state
const initalState = {};

//create context
export const GlobalContext = createContext();

//create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tv, setTv] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => setPopular(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => setNowPlaying(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => setUpcoming(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
      )
      .then((res) => setTv(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => setTrending(res.data.results));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        popular: [popular, setPopular],
        nowPlaying: [nowPlaying, setNowPlaying],
        upcoming: [upcoming, setUpcoming],
        tv: [tv, setTv],
        trending: [trending, setTrending],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
