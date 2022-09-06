import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {

  function componentDidMount() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="cap">
        <div className="first-slod text-center">
          <h6 className="war-text pt-2-lg">Sayt Test rejimida</h6>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="site-title">26-Maktab</span>
          </a>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler border-0"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-secondary" to="/" onClick={componentDidMount}>
                  Asosiy
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn border-0 p-0 mt-lg-2 text-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Maktab
                  </button>
                  <ul className="dropdown-menu p-0 m-0">
                    <li>
                      <NavLink className="dropdown-item" to="/royal" >
                        Raxbariyat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/about">
                        Maktab haqida
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/qoidalar">
                        Maktab qoidalari
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#main">
                  Malumotlar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#facts">
                  Statistika
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#News">
                  Yangiliklar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#test">
                  Testlar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
