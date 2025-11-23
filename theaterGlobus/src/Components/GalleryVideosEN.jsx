// src/components/GalleryVideosEN.jsx
import React from "react";

const GalleryVideosEN = () => {
  return (
    <section
      id="gallery"
      aria-label="Rehearsal videos gallery"
      className="features04 strengthm5 cid-v20nubbi1f"
    >
      <div className="container">

        {/* SECTION HEADER */}
        <div className="row">
          <div className="col-12">
            <header className="content-wrapper">
              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                Moments
              </p>

              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2 fw-bold">
                  Exceptional Clips
                </h2>

                <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                  From Our Rehearsals
                </h3>
              </div>

              <p className="mbr-text mbr-fonts-style display-7">
                Feel the passion and dedication of our actors—captured from behind the scenes.
              </p>
            </header>
          </div>
        </div>

        {/* VIDEO GALLERY */}
        <div className="row items-wrapper justify-content-center">

          {/* Video 1 */}
          <article
            className="col-12 col-lg-4 item features-image"
            aria-label="Rehearsal video 1"
          >
            <div className="item-wrapper little-radius">
              <video
                className="repetition little-radius w-100 h-100"
                controls
                preload="metadata"
                aria-label="Rehearsal video 1"
                
              >
                <source
                  src="/images/09c32d87-e460-4c46-8a0c-b3429f92114d.mp4"
                  type="video/mp4"
                />
                <track kind="captions" src="" label="Captions" />
              </video>
            </div>
          </article>

          {/* Video 2 */}
          <article
            className="col-12 col-lg-4 item features-image"
            aria-label="Rehearsal video 2"
          >
            <div className="item-wrapper little-radius">
              <video
                className="repetition little-radius w-100 h-100"
                controls
                preload="metadata"
                aria-label="Rehearsal video 2"
              >
                <source
                  src="/images/910f246b-5511-42a4-a639-d94302ac41a2.mp4"
                  type="video/mp4"
                />
                <track kind="captions" src="" label="Captions" />
              </video>
            </div>
          </article>

          {/* Video 3 */}
          <article
            className="col-12 col-lg-4 item features-image"
            aria-label="Rehearsal video 3"
            
          >
            <div className="item-wrapper little-radius">
              <video
                className="repetition little-radius w-100 h-100"
                controls
                preload="metadata"
                aria-label="Rehearsal video 3"
              >
                <source
                  src="/images/d4105f39-6cff-4271-b9ff-cef4ef19d8e4 (1).mp4"
                  type="video/mp4"
                />
                <track kind="captions" src="" label="Captions" />
              </video>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default GalleryVideosEN;
