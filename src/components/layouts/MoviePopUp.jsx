import React, { Component } from "react";

class MoviePopUp extends Component {
  handleClick = () => {
    this.props.togglePop();
  };
  render() {
    const { title, vote, overview, image } = this.props;
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.handleClick}>
              &times;
            </span>
            <div className="popup-image">
              <img src={image} alt="{title}" />
            </div>
            <div className="content">
              <h1>{title}</h1>
              <h3>
                ( {vote}
                <i class="fas fa-star"></i> )
              </h3>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MoviePopUp;
