import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="container">
          <div className="countListCoursesAdd">
            <p>0 courses in the basket</p>
          </div>
          <div className="listCoursesAdd">
            <div className="icon_cart">
              <i className="fa fa-cart-arrow-down"></i>
            </div>
            <div className="cart_text">
              <p>Your basket is empty.</p>
              <p>Continue shopping and find a course!</p>
            </div>
            <div className="cart_center cart_btn">
                <a href="http://localhost:3000" className="btn btn-danger">Continue your purchases</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
