import React from "react";
import { NavLink } from "react-router-dom";
import "./scss/NavBar.css";
import image from "/logo.jpeg";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid style_nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <div className="logo">
            <img src={image} alt="logo" />
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active Link" : "nav-link Link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? "nav-link active Link" : "nav-link Link"
                }
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
