import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {

  return (
    <div className="navbar">
      <NavLink className="brand" to="/">ANK Excavation</NavLink>
        <ul  className="navbar-items">
          <li className="nav-item">
            Phone: 509-540-4185
          </li>
          <li className="nav-item">
            Email: austinklassen@gmail.com
          </li>
        </ul>
    </div>
  );
}

export default Navigation;
