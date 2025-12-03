// src/components/GalleryVideosEN.jsx
import React from "react";

const GalleryVideosEN = () => {
  const videos = [
    {
      id: 1,
      src: "/images/09c32d87-e460-4c46-8a0c-b3429f92114d.mp4",
      alt: "Rehearsal video 1",
    },
    {
      id: 2,
      src: "/images/910f246b-5511-42a4-a639-d94302ac41a2.mp4",
      alt: "Rehearsal video 2",
    },
    {
      id: 3,
      src: "/images/d4105f39-6cff-4271-b9ff-cef4ef19d8e4 (1).mp4",
      alt: "Rehearsal video 3",
    },
  ];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title-en"
      className="features04 strengthm5 cid-v20nubbi1f"
    >
      <div className="container">

        {/* HEADER */}
        <div className="row">
          <div className="col-12">
            <header className="content-wrapper">
              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                Moments
              </p>

              <hgroup className="title-wrapper">
                <h2
                  id="gallery-title-en"
                  className="mbr-section-title mbr-fonts-style display-2 fw-bold"
                >
                  Exceptional Clips
                </h2>

                <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                  From Our Rehearsals
                </h3>
              </hgroup>

              <p className="mbr-text mbr-fonts-style display-7">
                Feel the passion and dedication of our actors—captured from behind the scenes.
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
              aria-labelledby={`video-title-en-${id}`}
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
                  id={`video-title-en-${id}`}
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

export default GalleryVideosEN;
