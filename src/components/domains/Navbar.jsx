import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar(props) {
  // const [state, toggle] = useState(false);
  return (
    <nav className="navbar navbar-expand-xxxl fixed-top">
      <div
        className="container-fluid d-flex me-3"
        id={props.state ? "banner" : ""}
      >
        <div className="">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => props.toggleNavbar()}
          >
            <span className="navbar-toggler-icon">
              <hr className="burger" />
              <hr className="burger" />
              <hr className="burger" />
            </span>
          </button>
        </div>
      </div>
      <div>
        <div
          className={props.state ? "collapse" : "collapse navbar-collapse"}
          id="navbarNav"
        >
          <ul className="navbar-nav" onClick={() => props.toggleNavbar()}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                home
                <hr className="burger" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./About">
                About
                <hr className="burger" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Skills">
                skills
                <hr className="burger" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Projects">
                projects
                <hr className="burger" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
