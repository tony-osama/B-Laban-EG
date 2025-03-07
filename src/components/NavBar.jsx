import React from "react";
import { NavLink } from "react-router-dom";
import "./scss/NavBar.css";
import image from "/logo.jpeg";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
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
            <li className="nav-item">
              <NavLink
                to="/"
                className={`${({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"} Link`}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
