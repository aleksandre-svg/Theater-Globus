// src/components/Team.jsx
import React from "react";
import { useRef } from 'react'

const Team = () => {
  let scroll = useRef()
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
                ჩვენი გუნდი
              </p>

              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2 fw-bold">
                  ტალანტები
                </h2>
                <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                  კულისებს მიღმა
                </h3>
              </div>

              <p className="mbr-text mbr-fonts-style display-7">
                თეატრი არის სარკე, სადაც ადამიანი საკუთარ თავს იცნობს.
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
                <div className="embla__container" ref={scroll}>

                  {/* ====== TEAM MEMBER (Slide 1) ====== */}
                  <div class="embla__slide slider-image item">
                    <div class="slide-content">
                    <div class="item-wrapper little-radius">
                      <div class="item-img">
                      <img alt="Mobirise Website Builder" class="little-radius" src="/images/82db3402-155f-4929-98b0-f1c1b3f9a94b.jpg"/>
                      </div>
                      <div class="card-overlay little-radius">
                      </div>
                      <div class="blur-wrap little-radius">
                      </div>
                      <div class="card-box">
                      <h4 class="card-name mbr-fonts-style display-5">
                        <strong>
                        დავით რეხვიაშვილი
                        </strong>
                      </h4>
                      <p class="card-role mbr-fonts-style display-7">
                        
                      </p>
                      <p class="card-text mbr-fonts-style display-7">
                        
                      </p>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="embla__slide slider-image item">
                    <div class="slide-content">
                    <div class="item-wrapper little-radius">
                      <div class="item-img">
                      <img alt="Mobirise Website Builder" class="little-radius" src="/images/cf0e550f-722f-4edb-9327-fc8cc8466870.jpg"/>
                      </div>
                      <div class="card-overlay little-radius">
                      </div>
                      <div class="blur-wrap little-radius">
                      </div>
                      <div class="card-box">
                      <h4 class="card-name mbr-fonts-style display-5">
                        <strong>
                        ირაკლი ფირცხალავა
                        </strong>
                      </h4>
                      <p class="card-role mbr-fonts-style display-7">
                        
                      </p>
                      <p class="card-text mbr-fonts-style display-7">
                        
                      </p>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="embla__slide slider-image item">
                    <div class="slide-content">
                    <div class="item-wrapper little-radius">
                      <div class="item-img">
                      <img alt="Mobirise Website Builder" class="little-radius" src="/images/506cabbd-994d-40dc-895e-f56f9985caf5.jpg"/>
                      </div>
                      <div class="card-overlay little-radius">
                      </div>
                      <div class="blur-wrap little-radius">
                      </div>
                      <div class="card-box">
                      <h4 class="card-name mbr-fonts-style display-5">
                        <strong>
                        ბარბარე მომცემლიძე
                        </strong>
                      </h4>
                      <p class="card-role mbr-fonts-style display-7">
                        
                      </p>
                      <p class="card-text mbr-fonts-style display-7">
                        
                      </p>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="embla__slide slider-image item">
                    <div class="slide-content">
                    <div class="item-wrapper little-radius">
                      <div class="item-img">
                      <img alt="Mobirise Website Builder" class="little-radius" src="/images/441b29a0-670b-4763-bdf2-18cbb9a89955.jpg"/>
                      </div>
                      <div class="card-overlay little-radius">
                      </div>
                      <div class="blur-wrap little-radius">
                      </div>
                      <div class="card-box">
                      <h4 class="card-name mbr-fonts-style display-5">
                        <strong>
                        ანა ოკუჯავა
                        </strong>
                      </h4>
                      <p class="card-role mbr-fonts-style display-7">
                        
                      </p>
                      <p class="card-text mbr-fonts-style display-7">
                        
                      </p>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="embla__slide slider-image item">
                    <div class="slide-content">
                    <div class="item-wrapper little-radius">
                      <div class="item-img">
                      <img alt="Mobirise Website Builder" class="little-radius" src="/images/94d8d428-08cb-4073-87a6-c64f08a46d43.jpg"/>
                      </div>
                      <div class="card-overlay little-radius">
                      </div>
                      <div class="blur-wrap little-radius">
                      </div>
                      <div class="card-box">
                      <h4 class="card-name mbr-fonts-style display-5">
                        <strong>
                        თათული ხუციშვილი
                        </strong>
                      </h4>
                      <p class="card-role mbr-fonts-style display-7">
                        
                      </p>
                      <p class="card-text mbr-fonts-style display-7">
                        
                      </p>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="embla__slide slider-image item">
                    <div class="slide-content">
                    <div class="item-wrapper little-radius">
                      <div class="item-img">
                      <img alt="Mobirise Website Builder" class="little-radius" src="/images/00bd14de-6192-4c2b-b911-1707e67d7cb9.jpg"/>
                      </div>
                      <div class="card-overlay little-radius">
                      </div>
                      <div class="blur-wrap little-radius">
                      </div>
                      <div class="card-box">
                      <h4 class="card-name mbr-fonts-style display-5">
                        <strong>
                        ნინო ნოზაძე
                        </strong>
                      </h4>
                      <p class="card-role mbr-fonts-style display-7">
                        
                      </p>
                      <p class="card-text mbr-fonts-style display-7">
                        
                      </p>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="embla__slide slider-image item">
                    <div class="slide-content">
                    <div class="item-wrapper little-radius">
                      <div class="item-img">
                      <img alt="Mobirise Website Builder" class="little-radius" src="/images/3099b48b-6a89-442c-8d3d-b703eda160b2.jpg"/>
                      </div>
                      <div class="card-overlay little-radius">
                      </div>
                      <div class="blur-wrap little-radius">
                      </div>
                      <div class="card-box">
                      <h4 class="card-name mbr-fonts-style display-5">
                        <strong>
                        კობა სხილაძე
                        </strong>
                      </h4>
                      <p class="card-role mbr-fonts-style display-7">
                        რეჟისორი
                      </p>
                      <p class="card-text mbr-fonts-style display-7">
                        
                      </p>
                      </div>
                    </div>
                    </div>
                  </div>

                  {/* TODO: Add other team members here in EXACT same structure */}

                </div>
              </div>

              {/* Slider Controls */}
              <button
                type="button"
                className="embla__button embla__button--prev"
                aria-label="Previous slide"
                onClick={() => {
                  scroll.current.scrollBy({left: 360, behavior: "smooth"})
                }}
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
                onClick={() => {
                  scroll.current.scrollBy({left: 360, behavior: "smooth"})
                }}
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

export default Team;
