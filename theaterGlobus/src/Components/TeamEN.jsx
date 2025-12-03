// src/components/TeamEN.jsx
import React, { useRef } from "react";

const TeamEN = () => {
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  const teamMembers = [
    {
      name: "Davit Rekhviashvili",
      img: "/images/82db3402-155f-4929-98b0-f1c1b3f9a94b.jpg",
      role: "",
    },
    {
      name: "Irakli Pirtskhilava",
      img: "/images/cf0e550f-722f-4edb-9327-fc8cc8466870.jpg",
      role: "",
    },
    {
      name: "Barbare Momcemelidze",
      img: "/images/506cabbd-994d-40dc-895e-f56f9985caf5.jpg",
      role: "",
    },
    {
      name: "Ana Okujava",
      img: "/images/441b29a0-670b-4763-bdf2-18cbb9a89955.jpg",
      role: "",
    },
    {
      name: "Tatuli Khutsishvili",
      img: "/images/94d8d428-08cb-4073-87a6-c64f08a46d43.jpg",
      role: "",
    },
    {
      name: "Nino Nozadze",
      img: "/images/00bd14de-6192-4c2b-b911-1707e67d7cb9.jpg",
      role: "",
    },
    {
      name: "Koba Skhiladze",
      img: "/images/3099b48b-6a89-442c-8d3d-b703eda160b2.jpg",
      role: "Director",
    },
  ];

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
            >
              {/* Viewport */}
              <div className="embla__viewport">
                <div className="embla__container" ref={scrollRef}>
                  
                  {/* Render Team Cards */}
                  {teamMembers.map((person, i) => (
                    <article
                      key={i}
                      className="embla__slide slider-image item"
                      aria-label={`Team member: ${person.name}`}
                    >
                      <div className="slide-content">
                        <div className="item-wrapper little-radius">
                          
                          {/* Image */}
                          <div className="item-img">
                            <img
                              src={person.img}
                              alt={`${person.name} portrait`}
                              loading="lazy"
                              className="little-radius"
                            />
                          </div>

                          {/* Effects */}
                          <div className="card-overlay little-radius"></div>
                          <div className="blur-wrap little-radius"></div>

                          {/* Text */}
                          <div className="card-box">
                            <h4 className="card-name mbr-fonts-style display-5">
                              <strong>{person.name}</strong>
                            </h4>

                            {person.role && (
                              <p className="card-role mbr-fonts-style display-7">
                                {person.role}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}

                </div>
              </div>

              {/* Slider Controls */}
              <button
                type="button"
                className="embla__button embla__button--prev"
                aria-label="Previous slide"
                onClick={() => scrollByAmount(-430)}
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
                onClick={() => scrollByAmount(430)}
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
