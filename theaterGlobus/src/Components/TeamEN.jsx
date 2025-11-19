// src/components/TeamEN.jsx
import React from "react";

const TeamEN = () => {
  return (
    <section
      id="team"
      aria-label="Theater Globus team members"
      className="slider01 mbr-embla strengthm5 cid-v20nubcw0C"
    >
      <div className="container content-wrap">

        {/* SECTION HEADER */}
        <div className="row">
          <div className="col-12">
            <header className="content-wrapper">
              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                Our Team
              </p>

              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2 fw-bold">
                  Talents
                </h2>
                <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                  Behind the Curtains
                </h3>
              </div>

              <p className="mbr-text mbr-fonts-style display-7">
                Theater is a mirror through which a person discovers themselves.
              </p>
            </header>
          </div>
        </div>

        {/* TEAM SLIDER */}
        <div className="row mt-4">
          <div className="col-12">

            <div
              className="embla"
              aria-roledescription="carousel"
              aria-label="Team members carousel"
              data-align="center"
              data-auto-play-interval="5"
              data-contain-scroll="trimSnaps"
              data-draggable="true"
              data-loop="true"
              data-skip-snaps="true"
            >
              {/* Viewport */}
              <div className="embla__viewport">
                <div className="embla__container">

                 

                  {/* TODO: Add more team members in the same structure */}

                </div>
              </div>

              {/* Slider Controls */}
              <button
                type="button"
                className="embla__button embla__button--prev"
                aria-label="Previous slide"
              >
                <span
                  aria-hidden="true"
                  className="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont"
                ></span>
              </button>

              <button
                type="button"
                className="embla__button embla__button--next"
                aria-label="Next slide"
              >
                <span
                  aria-hidden="true"
                  className="mobi-mbri mobi-mbri-arrow-next mbr-iconfont"
                ></span>
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamEN;
