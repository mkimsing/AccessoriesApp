import React, { Component } from "react";

export default class HomeCollection extends Component {
  render() {
    return (
      <div className="collection">
        <div className="collection__childOne">
          <div className="collection__childOne--text">
            <h2>Winter Collection</h2>
            <p>Check out the latest winter collection</p>
          </div>
          <div className="collection__childOne--img">
            <a>
              <span>Winter Vibe</span>
            </a>
          </div>
        </div>
        <div className="collection__childTwo">
          <div className="collection__childTwo—text">
            <h2>Check the goods</h2>
            <p>Don't take our word for it, see for yourself</p>
          </div>
          <div className="collection__childTwo—img">
            <a>
              <span>Shop Now</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
