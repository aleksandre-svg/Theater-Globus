// src/components/NavbarEN.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavbarEN = () => {
  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#hero"
        className="visually-hidden-focusable"
      >
        Skip to main content
      </a>

      <header id="navbar" className="menu menu01 strengthm5 cid-v20nubbXzn">
        <nav
          className="navbar navbar-dropdown navbar-expand-lg"
          aria-label="Main navigation"
          role="navigation"
        >
          <div className="container">

            {/* BRAND / LOGO */}
            <a
              className="navbar-brand text-white display-5 fw-bold"
              href="#hero"
            >
              Globus
            </a>

            {/* MOBILE MENU TOGGLER */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbarEN"
              aria-controls="mainNavbarEN"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* NAVIGATION LINKS */}
            <div className="collapse navbar-collapse" id="mainNavbarEN">
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

                {/* LANGUAGE SWITCH */}
                <li className="nav-item">
                  <Link
                    className="nav-link text-white display-4"
                    to="/"
                    hreflang="ka"
                  >
                    View in Georgian
                  </Link>
                </li>

              </ul>

              {/* CTA BUTTON */}
              <div className="navbar-buttons mbr-section-btn ms-lg-3">
                <a
                  href="#contact-info"
                  className="btn btn-primary display-7"
                  role="button"
                >
                  Tickets
                </a>
              </div>
            </div>

          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarEN;
