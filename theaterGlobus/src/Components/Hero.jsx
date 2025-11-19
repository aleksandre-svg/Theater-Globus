// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Theater Globus hero section"
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

          {/* LEFT SIDE – TITLE */}
          <div className="col-12 col-lg-5 card">
            <header className="title-wrapper">

              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                კეთილი იყოს თქვენი ფეხი
              </p>

              <h1 className="mbr-section-title mbr-fonts-style display-1 fw-bold hero-title" style={{fontSize: "70px"}}>
                თეატრი გლობუსი: ადგილი სადაც ვარკვლავები იბადებიან
              </h1>

            </header>
          </div>

          {/* RIGHT SIDE – TEXT */}
          <div className="col-12 col-lg-5 card">
            <div className="text-wrapper">

              <p className="mbr-text mbr-fonts-style display-4">
                შედგი ფეხი ამ არაჩვეულებრივ სამყაროში, სადაც გაიცნობ შენს თავს
                ახალი მხრიდან და დაემშვიდობები კომპლექსებს.
              </p>

              {/* CTA BUTTON */}
              <div className="mbr-section-btn">
                <a
                  className="btn btn-white display-7"
                  href="#video-section"
                  aria-label="ნახე ჩვენი დადგმები"
                >
                  დადგმების ნახვა
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
