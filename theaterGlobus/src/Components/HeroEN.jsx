// src/components/HeroEN.jsx
import React from "react";

const HeroEN = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title-en"
      className="header01 strengthm5 cid-v20nubbrab mbr-parallax-background"
    >
      {/* Overlay */}
      <div
        className="mbr-overlay"
        style={{ opacity: 0.3, backgroundColor: "rgb(17, 17, 17)" }}
        aria-hidden="true"
      ></div>

      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">

          {/* LEFT SIDE — TITLE */}
          <div className="col-12 col-lg-5 card">
            <header className="title-wrapper">

              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                Welcome
              </p>

              <hgroup>
                <h1
                  id="hero-title-en"
                  className="mbr-section-title mbr-fonts-style display-1 fw-bold hero-title hero-title1"
                >
                  Theater Globus: A Place Where Stars Are Born
                </h1>
              </hgroup>

            </header>
          </div>

          {/* RIGHT SIDE — TEXT */}
          <div className="col-12 col-lg-5 card">
            <div className="text-wrapper">

              <p className="mbr-text mbr-fonts-style display-4">
                Step into this extraordinary world where you discover a new side of yourself
                and leave your insecurities behind.
              </p>

              {/* CTA BUTTON */}
              <div className="mbr-section-btn">
                <a
                  className="btn btn-white display-7"
                  href="#video-section"
                  role="button"
                >
                  View Performances
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroEN;
