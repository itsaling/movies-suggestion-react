import React, { Component } from "react";

class MoviePopUp extends Component {
  handleClose = () => {
    this.props.togglePop();
  };

  render() {
    const { title, vote, overview, image, release_date, id } = this.props;
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.handleClose}>
              &times;
            </span>
            <div className="popup-image">
              <img src={image} alt="{title}" />
            </div>
            <div className="content">
              <div className="d-flex">
                <p>{release_date}</p>
                {/* <i class="fas fa-heart"></i> */}
                <i class="far fa-heart"></i>
              </div>
              <h1>
                {title} ( {vote}
                <i class="fas fa-star"></i> )
              </h1>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MoviePopUp;
