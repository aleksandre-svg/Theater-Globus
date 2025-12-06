// src/components/VideoSectionEN.jsx
import React from "react";

const VideoSectionEN = () => {
  const videos = [
    {
      src: "/images/5c7d9684-58d3-44d2-a120-476f7832b1d6.mp4",
      caption: "Rehearsal moment — an emotional scene on stage",
    },
    {
      src: "/images/b8e28b26-ef3b-426c-8f11-bba45a79be3a.mp4",
      caption: "A unique fragment captured directly from the stage",
    },
  ];

  return (
    <section
      id="video-section"
      aria-label="Theater Globus video performances"
      className="image01 strengthm5 cid-v20nubcwN9 mbr-fullscreen mbr-parallax-background"
    >
      <div className="container-fluid">
        <div className="row justify-content-center">

          {/* Section Title */}
          <header className="col-12 text-center mb-4">
            <h2 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold mbr-section-title1">
              Theater teaches us compassion, love, and the true strength of humanity.
            </h2>
          </header>

          {/* Video List */}
          <div className="col-12">

            {videos.map((video, index) => (
              <figure
                key={index}
                className="image-wrap mb-4 w-100"
                role="group"
                aria-roledescription="video with caption"
                aria-label={`Video ${index + 1}: ${video.caption}`}
              >
                {/* FIXED ASPECT RATIO WRAPPER */}
                <div className="video-wrapper">
                  <video
                    className="video-el"
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    <track kind="captions" src="" label="English captions" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                <figcaption className="mbr-fonts-style display-7 mt-2 text-center opacity-75">
                  {video.caption}
                </figcaption>
              </figure>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSectionEN;
