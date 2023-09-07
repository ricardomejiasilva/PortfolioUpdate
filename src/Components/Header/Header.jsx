import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = ({project = false}) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg navbarContainer">
        <div className="container-fluid" style={{ padding: "unset" }}>
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: `${pathname !== "/" && "#000"}` }}
          >
            PortFolio<span className="dot">.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menuItems">
              <li className="nav-item">
                <Link
                  className="nav-link notFocus "
                  aria-current="page"
                  to="#"
                  style={{ color: `${pathname !== "/" && "#000"}` }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link notFocus"
                  to="#"
                  style={{ color: `${pathname !== "/" && "#000"}` }}
                >
                  Skill
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link notFocus"
                  href="#project"
                  style={{ color: `${pathname !== "/" && "#000"}` }}
                >
                  Project
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link notFocus"
                  to="#"
                  style={{ color: `${pathname !== "/" && "#000"}` }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a href="mailto: ricardo_mejia1996.com">
              <button
                className="btn contactMeBtn"
                style={{
                  color: `${pathname === "/project" && "#FFF"}`,
                  background: `${
                    pathname === "/project" &&
                    "linear-gradient(90deg, #31A8FF 0%, #0085FF 100%)"
                  }`,
                }}
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
