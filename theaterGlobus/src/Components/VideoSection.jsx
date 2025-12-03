// src/components/VideoSection.jsx
import React from "react";

const VideoSection = () => {
  const videos = [
    {
      src: "/images/5c7d9684-58d3-44d2-a120-476f7832b1d6.mp4",
      caption: "რეპეტიციის კადრი — ემოციური მომენტი სცენაზე",
    },
    {
      src: "/images/b8e28b26-ef3b-426c-8f11-bba45a79be3a.mp4",
      caption: "სცენიდან უნიკალური ფრაგმენტი",
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
            <h2 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
              თეატრი გვასწავლის თანაგრძნობას, სიყვარულს და ადამიანობის ძალას.
            </h2>
          </header>

          {/* Video List */}
          <div className="col-12">
            {videos.map((video, index) => (
              <figure
                key={index}
                role="group"
                aria-roledescription="video with caption"
                aria-label={`Video ${index + 1}: ${video.caption}`}
                className="image-wrap mb-5 w-100"
              >
                <div className="video-wrapper">
                  <video
                    className="w-100 h-100"
                    controls
                    preload="metadata"
                    aria-describedby={`caption-${index}`}
                  >
                    <source src={video.src} type="video/mp4" />
                    <track
                      kind="captions"
                      src=""
                      label="English captions"
                    />
                    Your browser does not support this video.
                  </video>
                </div>

                <figcaption
                  id={`caption-${index}`}
                  className="mbr-fonts-style display-7 mt-2 text-center opacity-75"
                >
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

export default VideoSection;
