import React from "react";
import "./Nav.css";
import { useLocation, NavLink } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Section not found, navigating to", id);
      window.location.hash = id; // This will add the section's ID to the URL's hash
    }
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbarContainer">
        <div className="container-fluid" style={{ padding: "unset" }}>
          <NavLink
            className="navbar-brand"
            to="/"
            style={{ color: `${pathname !== "/" && "#000"}` }}
          >
            PortFolio<span className="dot">.</span>
          </NavLink>
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
                <NavLink
                  className="nav-link notFocus"
                  aria-current="page"
                  to="/"
                  style={{ color: `${pathname !== "/" && "#000"}` }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link notFocus"
                  href="/#about"
                  // onClick={() => scrollToSection("about")}
                  style={{ color: `${pathname !== "/" && "#000"}` }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link notFocus"
                  href="/#project"
                  // onClick={() => scrollToSection("project")}
                  style={{ color: `${pathname !== "/" && "#000"}` }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link notFocus"
                  href="mailto:ricardo_mejia1996@live.com"
                  style={{ color: `${pathname !== "/" && "#000"}` }}
                >
                  Contact
                </a>
              </li>
            </ul>
            <a href="mailto:ricardo_mejia1996@live.com">
              <button
                className="btn contactMeBtn"
                style={{
                  color: `${pathname === "/projects" && "#FFF"}`,
                  background: `${
                    pathname === "/projects" &&
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

export default Nav;
