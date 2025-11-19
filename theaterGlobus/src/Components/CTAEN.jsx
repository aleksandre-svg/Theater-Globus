// src/components/CTAEN.jsx
import React from "react";

const CTAEN = () => {
  return (
    <section
      id="cta"
      aria-label="Call to action section"
      className="article03 strengthm5 cid-v20nubcJSF"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">

          {/* Left: Text Content */}
          <div className="col-12 col-lg-6 card">
            <div className="content-wrapper">

              {/* Section Label */}
              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                Don’t Miss Out
              </p>

              {/* Main Title */}
              <h2 className="mbr-section-title mbr-fonts-style display-2 fw-bold">
                Reserve Your Seat Today
              </h2>

              {/* Description */}
              <p className="mbr-text mbr-fonts-style display-7">
                Seats are available, our actors are ready! What are you waiting for?
              </p>

              {/* CTA Button */}
              <div className="mbr-section-btn">
                <a
                  className="btn btn-primary display-7"
                  href="#contact"
                  aria-label="Buy Tickets"
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="col-12 col-lg-6 card">
            <div className="image-wrapper">
              <img
                src="/images/logo.jpg"
                alt="Theater Globus Logo"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTAEN;
