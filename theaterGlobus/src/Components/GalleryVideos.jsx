// src/components/GalleryVideos.jsx
import React from "react";

const GalleryVideos = () => {
  const videos = [
    {
      id: 1,
      src: "/images/09c32d87-e460-4c46-8a0c-b3429f92114d.mp4",
      alt: "რეპეტიციის ვიდეო 1",
    },
    {
      id: 2,
      src: "/images/910f246b-5511-42a4-a639-d94302ac41a2.mp4",
      alt: "რეპეტიციის ვიდეო 2",
    },
    {
      id: 3,
      src: "/images/d4105f39-6cff-4271-b9ff-cef4ef19d8e4 (1).mp4",
      alt: "რეპეტიციის ვიდეო 3",
    },
  ];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="features04 strengthm5 cid-v20nubbi1f"
    >
      <div className="container">

        {/* HEADER */}
        <div className="row">
          <div className="col-12">
            <header className="content-wrapper">
              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                მომენტები
              </p>

              <hgroup className="title-wrapper">
                <h2
                  id="gallery-title"
                  className="mbr-section-title mbr-fonts-style display-2 fw-bold mbr-section-title1"
                >
                  არაჩვეულებრივი კადრები
                </h2>

                <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold mbr-section-title1">
                  ჩვენი რეპეტიციების
                </h3>
              </hgroup>

              <p className="mbr-text mbr-fonts-style display-7">
                იგრძენით მსახიობების ტალანტი და მონდომება ეკრანის მეორე მხრიდან.
              </p>
            </header>
          </div>
        </div>

        {/* VIDEO GRID */}
        <div className="row items-wrapper justify-content-center">
          {videos.map(({ id, src, alt, poster }) => (
            <article
              key={id}
              className="col-12 col-lg-4 item features-image"
              aria-labelledby={`video-title-${id}`}
            >
              <figure className="item-wrapper little-radius">
                <video
                  className="repetition little-radius w-100 h-100"
                  controls
                  preload="metadata"
                  disablePictureInPicture
                  controlsList="nodownload"
                  width="400"
                  height="700"
                >
                  <source src={src} type="video/mp4" />
                </video>

                <figcaption
                  id={`video-title-${id}`}
                  className="visually-hidden"
                >
                  {alt}
                </figcaption>
              </figure>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryVideos;
