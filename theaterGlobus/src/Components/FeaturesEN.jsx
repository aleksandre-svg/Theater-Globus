// src/components/FeaturesEN.jsx
import React from "react";

const FeaturesEN = () => {
  return (
    <section
      id="features"
      aria-label="Theater features"
      className="features03 strengthm5 cid-v20nubb4nq"
    >
      <div className="container">

        {/* SECTION HEADER */}
        <div className="row">
          <div className="col-12">
            <header className="content-wrapper">
              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                Our Stage
              </p>

              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2 fw-bold">
                  Stunning Performances
                </h2>

                <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                  A Look Behind the Curtain
                </h3>
              </div>

              <p className="mbr-text mbr-fonts-style display-7">
                When you're in the theater, time seems to stop and a spiritual journey begins.
              </p>
            </header>
          </div>
        </div>

        {/* FEATURE ITEMS */}
        <div className="row items-wrapper justify-content-center">

          {/* Feature 1 (Image + Text) */}
          <article className="col-12 col-lg-7 item features-image">
            <div className="item-wrapper">
              <div className="gradient-wrap card-wrap"></div>
              <div className="circle-wrap"></div>

              <div className="item-content card-wrap card_1">
                <div className="card-box">
                  <h4 className="card-title_1 mbr-fonts-style display-5 fw-bold">
                    Mesmerizing Comfort
                  </h4>

                  <p className="card-text_1 mbr-fonts-style display-7">
                    When you're in the theater, time seems to stop and a spiritual journey begins.
                  </p>
                </div>

                <div className="item-img">
                  <img
                    src="/images/calmnes.jpg"
                    alt="Calm and cozy theater atmosphere"
                    className="little-radius"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Feature 2 (Text only) */}
          <article className="col-12 col-lg-5 item features-without-image">
            <div className="item-wrapper">
              <div className="gradient-wrap card-wrap"></div>
              <div className="circle-wrap"></div>

              <div className="item-content card-wrap card_2">
                <div className="card-box">
                  <h4 className="card-title_2 mbr-fonts-style display-5 fw-bold">
                    The Stage
                  </h4>

                  <p className="card-text_2 mbr-fonts-style display-7">
                    The stage is a world where reality transforms into art.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Feature 3 (Text only) */}
          <article className="col-12 col-lg-5 item features-without-image">
            <div className="item-wrapper">
              <div className="gradient-wrap card-wrap"></div>
              <div className="circle-wrap reverse"></div>

              <div className="item-content card-wrap card_3">
                <div className="card-box">
                  <h4 className="card-title_3 mbr-fonts-style display-5 fw-bold">
                    Talented Actors
                  </h4>

                  <p className="card-text_3 mbr-fonts-style display-7">
                    Quality you can feel immediately.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Feature 4 (Image + Text) */}
          <article className="col-12 col-lg-7 item features-image">
            <div className="item-wrapper">
              <div className="gradient-wrap card-wrap"></div>
              <div className="circle-wrap reverse"></div>

              <div className="item-content card-wrap card_4">
                <div className="card-box">
                  <h4 className="card-title_4 mbr-fonts-style display-5 fw-bold">
                    Carefully Selected Shows
                  </h4>

                  <p className="card-text_4 mbr-fonts-style display-7">
                    Interesting and thoughtfully chosen performances.
                  </p>
                </div>

                <div className="item-img">
                  <img
                    alt="Stage performance scene"
                    className="little-radius"
                    loading="lazy"
                    src="https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551248703-d0d827b91d7c%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8Mjd8fHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MHwwfHx8MTc2MjY0NTE0Mnww%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50&e=1767744000&s=f9Si0-U7TeVP6CtzJfSVcHhW2Gk5tYo1pCQ0dLSlNNs"
                  />
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default FeaturesEN;
