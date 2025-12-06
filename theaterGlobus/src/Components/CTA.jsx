// src/components/CTA.jsx
import React from "react";

const CTA = () => {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="article03 strengthm5 cid-v20nubcJSF"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">

          {/* LEFT: TEXT CONTENT */}
          <div className="col-12 col-lg-6 card">
            <div className="content-wrapper">

              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                არ გამოტოვო
              </p>

              <hgroup>
                <h2
                  id="cta-title"
                  className="mbr-section-title mbr-fonts-style display-2 fw-bold mbr-section-title2"
                >
                  შეუკვეთე შენი ადგილი დღესვე
                </h2>
              </hgroup>

              <p className="mbr-text mbr-fonts-style display-7">
                ადგილი არის, მსახიობები მზად არიან! რას ელოდები?
              </p>

              <div className="mbr-section-btn">
                <a
                  className="btn btn-primary display-7"
                  href="#contact"
                  role="button"
                >
                  შეიძინე ბილეთები
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="col-12 col-lg-6 card">
            <div className="image-wrapper">
              <img
                src="/images/logo.jpg"
                alt="Theater Globus Logo"
                loading="lazy"
                width="600"
                height="600"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
