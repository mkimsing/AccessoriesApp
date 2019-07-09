import React, { Component } from "react";

export default class Common extends Component {
  render() {
    return (
      <div className="common">
        <div className="common__image">
          <img id="thumb" src={this.props.thumb} alt="thumb" />
        </div>
        <div className="common__details">
          <div className="common__details--stars" />
          <div className="common_details--title">
            <h5>{this.props.title}</h5>
          </div>
          <div className="common__details--price">
            <h5>$ {this.props.price}</h5>
          </div>
        </div>
      </div>
    );
  }
}
