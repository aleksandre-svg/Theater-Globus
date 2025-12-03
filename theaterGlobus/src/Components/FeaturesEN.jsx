// src/components/FeaturesEN.jsx
import React from "react";

const FeaturesEN = () => {
  const featureItems = [
    {
      id: 1,
      type: "image",
      title: "Mesmerizing Comfort",
      text: "When you're in the theater, time seems to stop and a spiritual journey begins.",
      img: "/images/calmnes.jpg",
      imgAlt: "Calm and cozy theater atmosphere",
      imgWidth: 800,
      imgHeight: 600,
      reverseCircle: false,
    },
    {
      id: 2,
      type: "text",
      title: "The Stage",
      text: "The stage is a world where reality transforms into art.",
      reverseCircle: false,
    },
    {
      id: 3,
      type: "text",
      title: "Talented Actors",
      text: "Quality you can feel immediately.",
      reverseCircle: true,
    },
    {
      id: 4,
      type: "image",
      title: "Carefully Selected Shows",
      text: "Interesting and thoughtfully chosen performances.",
      img:
        "https://shenitbilisi.ge/wp-content/uploads/2025/07/IMG_2888.jpeg",
      imgAlt: "Stage performance scene",
      imgWidth: 1200,
      imgHeight: 800,
      reverseCircle: true,
    },
  ];

  return (
    <section
      id="features"
      aria-labelledby="features-title-en"
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

              <hgroup className="title-wrapper">
                <h2
                  id="features-title-en"
                  className="mbr-section-title mbr-fonts-style display-2 fw-bold"
                >
                  Stunning Performances
                </h2>

                <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                  A Look Behind the Curtain
                </h3>
              </hgroup>

              <p className="mbr-text mbr-fonts-style display-7">
                When you're in the theater, time seems to stop and a spiritual journey begins.
              </p>
            </header>
          </div>
        </div>

        {/* FEATURE ITEMS */}
        <div className="row items-wrapper justify-content-center">
          {featureItems.map((item) => (
            <article
              key={item.id}
              className={`col-12 col-lg-${
                item.type === "image" ? "7" : "5"
              } item ${item.type === "image" ? "features-image" : "features-without-image"}`}
              aria-label={item.title}
            >
              <div className="item-wrapper">
                <div className="gradient-wrap card-wrap"></div>
                <div
                  className={`circle-wrap ${item.reverseCircle ? "reverse" : ""}`}
                ></div>

                <div className={`item-content card-wrap card_${item.id}`}>
                  <div className="card-box">
                    <h4
                      className={`card-title_${item.id} mbr-fonts-style display-5 fw-bold`}
                    >
                      {item.title}
                    </h4>

                    <p
                      className={`card-text_${item.id} mbr-fonts-style display-7`}
                    >
                      {item.text}
                    </p>
                  </div>

                  {item.type === "image" && (
                    <div className="item-img">
                      <img
                        src={item.img}
                        alt={item.imgAlt}
                        loading="lazy"
                        width={item.imgWidth}
                        height={item.imgHeight}
                        className="little-radius"
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesEN;
