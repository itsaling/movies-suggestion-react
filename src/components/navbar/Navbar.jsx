import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <Link to="/">
          <h1 className="navbar-brand">MOVIES.</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/now-playing">
                Now Playing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top-rated">
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
