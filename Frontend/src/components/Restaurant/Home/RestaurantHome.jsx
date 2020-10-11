import React, { Component } from "react";
import "./RestaurantHome.styles.css";
import menuIcon from "../../../Assets/BackgroundImages/menu_icon.jpg";
import jumborest from "../../../Assets/BackgroundImages/rest_jumbo.jpg";

class RestaurantHome extends Component {
  state = {};
  render() {
    return (
      <div class="image">
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <a
                class="navbar-brand"
                style={{ color: "white" }}
                href="/restaurant/menu/list"
              >
                Menu
              </a>
              <a
                class="navbar-brand"
                style={{ color: "white" }}
                href="/restaurant/reviews"
              >
                Reviews
              </a>
              <a
                class="navbar-brand"
                style={{ color: "white" }}
                href="/restaurant/orders"
              >
                Orders
              </a>
              <a
                class="navbar-brand"
                style={{ color: "white" }}
                href="/restaurant/events/home"
              >
                Events
              </a>
              <a
                class="navbar-brand"
                style={{ color: "white" }}
                href="/restaurant/profile"
              >
                Profile
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default RestaurantHome;
