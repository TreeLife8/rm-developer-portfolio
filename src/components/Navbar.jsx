import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top  justify-content-between">
      <div className="container-fluid">
        <div className="d-inline-flex">
          <Link className="navbar-brand" to="/">
            RM
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <hr className="burger" />
              <hr className="burger" />
              <hr className="burger" />
            </span>
          </button>
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Projects">
                  projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
