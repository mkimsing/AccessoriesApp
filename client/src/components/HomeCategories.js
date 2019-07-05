import React, { Component } from "react";

export default class HomeCatagories extends Component {
  render() {
    return (
      <div className="categories">
        <div className="categories__earings">
          <a className="categories__earings--img" href="/collections/earings">
            <img src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/earrings_1950x.jpg?v=1543981431" />
          </a>
          <div className="categories__earings--text">
            <h3>Earings</h3>
          </div>
        </div>
        <div className="categories__necklaces">
          <a
            className="categories__necklaces—img"
            href="/collections/necklaces"
          >
            <img src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/necklaces_1950x.jpg?v=1543981732" />
          </a>
          <div className="categories__necklaces—text">
            <h3>Necklaces</h3>
          </div>
        </div>
        <div className="categories__rings">
          <a className="categories__rings—img" href="/collections/rings">
            <img src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/rings_1950x.jpg?v=1543980851" />
          </a>
          <div className="categories__rings—text">
            <h3>Rings</h3>
          </div>
        </div>
      </div>
    );
  }
}
