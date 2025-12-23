// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Skip Navigation Link (Accessibility Best Practice) */}
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

            {/* LOGO / BRAND */}
            <a
              className="navbar-brand text-white display-5 fw-bold"
              href="#hero"
            >
              გლობუსი
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
              <span className="hamburger" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* NAVIGATION MENU */}
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <a className="nav-link text-white display-4" href="#hero">
                    მთავარი
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white display-4" href="#features">
                    დადგმები
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white display-4" href="#team">
                    ჩვენს შესახებ
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white display-4" href="https://www.pornhub.com">
                    კონტაქტი
                  </a>
                </li>

                {/* LANGUAGE SWITCH */}
                <li className="nav-item">
                  <Link
                    className="nav-link text-white display-4"
                    to="/en"
                    hreflang="en"
                  >
                    View in English
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
                  ბილეთები
                </a>
              </div>
            </div>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
