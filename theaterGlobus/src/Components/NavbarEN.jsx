// src/components/NavbarEN.jsx
import React from "react";

const NavbarEN = () => {
  return (
    <header
      id="navbar"
      aria-label="Main navigation"
      className="menu menu01 strengthm5 cid-v20nubbXzn"
    >

      <nav className="navbar navbar-dropdown navbar-expand-lg">
        <div className="container">

          {/* BRAND / LOGO */}
          <a className="navbar-brand text-white display-5 fw-bold" href="#hero">
            Globus
          </a>

          {/* MOBILE TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* NAVIGATION LINKS */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link text-white display-4" href="#hero">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white display-4" href="#features">
                  Performances
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white display-4" href="#team">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white display-4" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white display-4" href="/">
                  View in Georgian
                </a>
              </li>
            </ul>

            {/* CTA BUTTON */}
            <div className="navbar-buttons mbr-section-btn ms-lg-3">
              <a
                href="#contact"
                className="btn btn-primary display-7"
                aria-label="Buy tickets"
              >
                Tickets
              </a>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarEN;
